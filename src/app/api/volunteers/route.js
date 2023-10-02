import { NextResponse } from "next/server";
import { db } from "../../../../firebase";
import { auth } from "@/utils/auth";
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

export async function POST(req) {
  const res = NextResponse;
  const { phone, discord, major, grade, gender, shirt, availability } =
    await req.json();

  const { message, authCode, uid } = await auth();

  if (authCode === 200) {
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
  } else {
    return res.json({ message }, { status: authCode });
  }
}

export async function GET() {
  const res = NextResponse;
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
  } catch (err) {
    console.log(err);
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 }
    );
  }

  return res.json({ message: "OK", items: output }, { status: 200 });
}

export async function PUT(req) {
  const res = NextResponse;
  const { objects, attribute, status } = await req.json();

  const { message, authCode } = await auth(true);

  if (authCode === 200) {
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
  } else {
    return res.json({ message }, { status: authCode });
  }
}
