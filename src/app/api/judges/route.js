import { NextResponse } from "next/server";
import { db } from "../../../utils/firebase";
import {
  doc,
  updateDoc,
  collection,
  getDocs,
  query,
  where,
  deleteField,
  Timestamp,
} from "firebase/firestore";
import { authenticate } from "@/utils/auth";
import { AUTH } from "@/data/dynamic/admin/Judges";
import SG from "@/utils/sendgrid";

export async function POST(req) {
  const res = NextResponse;
  const { auth, message, user } = await authenticate(AUTH.POST);

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${message}` },
      { status: auth }
    );
  }

  const { phone, gender, title, affiliation, shirt, photo } = await req.json();

  try {
    await updateDoc(doc(db, "users", user.id), {
      phone: phone,
      gender: gender,
      title: title,
      affiliation: affiliation.toLowerCase(),
      shirt: shirt,
      photo: photo,
      timestamp: Timestamp.now(),
      "roles.judges": 0,
    });

    SG.send({
      to: user.email,
      template_id: process.env.SENDGRID_CONFIRMATION_TEMPLATE,
      dynamic_template_data: {
        name: user.name,
        position: "JUDGE",
      },
    });

    return res.json({ message: "OK" }, { status: 200 });
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 }
    );
  }
}

export async function GET() {
  const res = NextResponse;
  const { auth, message } = await authenticate(AUTH.GET);

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${message}` },
      { status: auth }
    );
  }

  const output = [];

  try {
    const snapshot = await getDocs(
      query(collection(db, "users"), where("roles.judges", "in", [-1, 0, 1]))
    );
    snapshot.forEach((doc) => {
      const { name, email, affiliation, roles, photo, timestamp, title } =
        doc.data();
      output.push({
        uid: doc.id,
        name: name,
        email: email,
        affiliation: affiliation,
        title: title,
        status: roles.judges,
        photo: photo,
        selected: false,
        hidden: false,
        timestamp: timestamp,
      });
    });

    const sorted = output.sort((a, b) =>
      a.timestamp.seconds < b.timestamp.seconds ? 1 : -1
    );

    return res.json({ message: "OK", items: sorted }, { status: 200 });
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 }
    );
  }
}

export async function PUT(req) {
  const res = NextResponse;
  const { auth, message } = await authenticate(AUTH.PUT);

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${message}` },
      { status: auth }
    );
  }

  const { objects, attribute, status } = await req.json();

  try {
    objects.forEach(async (object) => {
      if (attribute === "role") {
        await updateDoc(doc(db, "users", object.uid), {
          "roles.judges": deleteField(),
        });
      } else if (attribute === "status") {
        await updateDoc(doc(db, "users", object.uid), {
          "roles.judges": status,
        });

        SG.send({
          to: object.email,
          template_id:
            status === 1
              ? process.env.SENDGRID_ACCEPTANCE_TEMPLATE
              : process.env.SENDGRID_REJECTION_TEMPLATE,
          dynamic_template_data: {
            name: object.name,
            position: "JUDGE",
          },
        });
      }
    });

    return res.json({ message: "OK" }, { status: 200 });
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 }
    );
  }
}
