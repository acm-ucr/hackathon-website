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
} from "firebase/firestore";
import { authenticate } from "@/utils/auth";
import { AUTH } from "@/data/dynamic/admin/Volunteers";

export async function POST(req) {
  const res = NextResponse;
  const { auth, message, user } = await authenticate(AUTH.POST);

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${message}` },
      { status: auth }
    );
  }
  const { phone, discord, major, grade, gender, shirt, availability } =
    await req.json();

  try {
    await updateDoc(doc(db, "users", user.id), {
      phone: phone,
      discord: discord,
      major: major,
      grade: grade,
      gender: gender,
      shirt: shirt,
      "roles.volunteers": 0,
      availability: availability,
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
  const { auth } = await authenticate(AUTH.GET);

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${"MESSAGE VARIABLE SHOULD BE HERE"}` },
      { status: auth }
    );
  }

  const output = [];

  try {
    const snapshot = await getDocs(
      query(
        collection(db, "users"),
        where("roles.volunteers", "in", [-1, 0, 1])
      )
    );
    snapshot.forEach((doc) => {
      const { name, email, discord, availability, roles } = doc.data();
      output.push({
        uid: doc.id,
        name,
        email,
        discord,
        availability,
        status: roles.volunteers,
        selected: false,
        hidden: false,
      });
    });
    return res.json({ message: "OK", items: output }, { status: 200 });
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 }
    );
  }
}

export async function PUT(req) {
  const res = NextResponse;
  const { auth } = await authenticate(AUTH.PUT);

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${"MESSAGE VARIABLE SHOULD BE HERE"}` },
      { status: auth }
    );
  }

  const { objects, attribute, status } = await req.json();

  try {
    objects.forEach(async (object) => {
      if (attribute === "role") {
        await updateDoc(doc(db, "users", object.uid), {
          "roles.volunteers": deleteField(),
        });
      } else if (attribute === "status") {
        await updateDoc(doc(db, "users", object.uid), {
          "roles.volunteers": status,
        });
      }
    });
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 }
    );
  }

  return res.json({ message: "OK" }, { status: 200 });
}
