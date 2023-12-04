import { NextResponse } from "next/server";
import { db } from "../../../../firebase";
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
import { AUTH } from "@/data/dynamic/admin/Sponsors";
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

  const { phone, company, position, tier } = await req.json();

  try {
    await updateDoc(doc(db, "users", user.id), {
      phone: phone,
      company: company,
      position: position,
      tier: tier,
      timestamp: Timestamp.now(),
      "roles.sponsors": 0,
    });

    SG.send({
      to: user.email,
      template_id: process.env.SENDGRID_CONFIRMATION_TEMPLATE,
      dynamic_template_data: {
        name: user.name,
        position: "SPONSOR",
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
      query(collection(db, "users"), where("roles.sponsors", "in", [-1, 0, 1]))
    );
    snapshot.forEach((doc) => {
      const { name, email, phone, roles, company, position, tier, timestamp } =
        doc.data();
      output.push({
        uid: doc.id,
        name: name,
        email: email,
        phone: phone,
        company: company,
        position: position,
        tier: tier,
        status: roles.sponsors,
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
          "roles.sponsors": deleteField(),
        });
      } else if (attribute === "status") {
        await updateDoc(doc(db, "users", object.uid), {
          "roles.sponsors": status,
        });

        SG.send({
          to: object.email,
          template_id:
            status === 1
              ? process.env.SENDGRID_ACCEPTANCE_TEMPLATE
              : process.env.SENDGRID_REJECTION_TEMPLATE,
          dynamic_template_data: {
            name: object.name,
            position: "SPONSOR",
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
