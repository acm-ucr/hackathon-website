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
import { AUTH } from "@/data/dynamic/admin/Participants";
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

  const {
    phone,
    discord,
    major,
    age,
    school,
    grade,
    gender,
    shirt,
    diet,
    resume,
  } = await req.json();

  try {
    await updateDoc(doc(db, "users", user.id), {
      phone: phone,
      discord: discord,
      major: major,
      age: age,
      school: school,
      grade: grade,
      gender: gender,
      shirt: shirt,
      timestamp: Timestamp.now(),
      "roles.participants": 0,
      diet: diet,
      resume: resume,
    });

    SG.send({
      to: user.email,
      template_id: process.env.SENDGRID_CONFIRMATION_TEMPLATE,
      dynamic_template_data: {
        name: user.name,
        position: "PARTICIPANT",
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
      query(
        collection(db, "users"),
        where("roles.participants", "in", [-1, 0, 1])
      )
    );
    snapshot.forEach((doc) => {
      const {
        name,
        email,
        phone,
        discord,
        major,
        age,
        school,
        grade,
        gender,
        shirt,
        roles,
        diet,
        resume,
        timestamp,
      } = doc.data();

      output.push({
        uid: doc.id,
        name,
        email,
        phone,
        discord,
        major,
        age,
        school,
        grade,
        gender,
        shirt,
        diet: diet.join(","),
        timestamp,
        resume: resume || "",
        status: roles.participants,
        selected: false,
        hidden: false,
      });
    });

    const sorted = output.sort((a, b) =>
      a.timestamp.seconds < b.timestamp.seconds ? 1 : -1
    );

    return res.json({ message: "OK", items: sorted }, { status: 200 });
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}`, items: [] },
      { status: 500 }
    );
  }
}

export async function PUT(req) {
  const res = NextResponse;
  const { objects, attribute, status } = await req.json();

  const { auth, message } = await authenticate(AUTH.PUT);

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${message}` },
      { status: auth }
    );
  }

  try {
    objects.forEach(async (object) => {
      if (attribute === "role") {
        await updateDoc(doc(db, "users", object.uid), {
          "roles.participants": deleteField(),
        });
      } else if (attribute === "status") {
        await updateDoc(doc(db, "users", object.uid), {
          "roles.participants": status,
        });

        SG.send({
          to: object.email,
          template_id:
            status === 1
              ? process.env.SENDGRID_ACCEPTANCE_TEMPLATE
              : process.env.SENDGRID_REJECTION_TEMPLATE,
          dynamic_template_data: {
            name: object.name,
            position: "PARTICIPANT",
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
