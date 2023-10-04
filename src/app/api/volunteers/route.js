import { NextResponse } from "next/server";
import { db } from "../../../../firebase";
import {
  doc,
  updateDoc,
  arrayUnion,
  collection,
  getDocs,
  query,
  where,
  arrayRemove,
  deleteField,
} from "firebase/firestore";
import { authenticate } from "@/utils/auth";

export async function POST(req) {
  const res = NextResponse;
  const { auth } = await authenticate({
    admins: 1,
  });

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${"MESSAGE VARIABLE SHOULD BE HERE"}` },
      { status: auth }
    );
  }
  const { phone, discord, major, grade, gender, shirt, availability } =
    await req.json();

  try {
    await updateDoc(doc(db, "users", uid), {
      phone: phone,
      discord: discord,
      major: major,
      grade: grade,
      gender: gender,
      shirt: shirt,
      "status.volunteers": "pending",
      availability: availability,
      role: arrayUnion("volunteers"),
    });
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 }
    );
  }

  return res.json({ message: "OK" }, { status: 200 });
}

export async function GET() {
  const res = NextResponse;
  const { auth } = await authenticate({
    admins: 1,
  });

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
        where("role", "array-contains", "volunteers")
      )
    );
    snapshot.forEach((doc) => {
      const { name, email, discord, availability, status } = doc.data();
      output.push({
        uid: doc.id,
        name,
        email,
        discord,
        availability,
        status: status.volunteers,
        selected: false,
        hidden: false,
      });
    });
    return res.json({ message: "OK", items: output }, { status: 200 });
  } catch (err) {
    console.log(err);
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 }
    );
  }
}

export async function PUT(req) {
  const res = NextResponse;
  const { auth } = await authenticate({
    admins: 1,
  });

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
          role: arrayRemove("volunteers"),
          "status.volunteers": deleteField(),
        });
      } else if (attribute === "status") {
        await updateDoc(doc(db, "users", object.uid), {
          "status.volunteers": status,
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
