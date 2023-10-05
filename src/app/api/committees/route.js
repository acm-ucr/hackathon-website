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

export async function POST(req) {
  const res = NextResponse;
  const { auth, message, user } = await authenticate();

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${message}` },
      { status: auth }
    );
  }

  const { discord, affiliation } = await req.json();

  try {
    await updateDoc(doc(db, "users", user.id), {
      discord: discord,
      affiliation: affiliation,
      "roles.committees": 0,
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
  const { auth, message } = await authenticate({
    admins: 1,
  });

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
        where("role", "array-contains", "committees")
      )
    );
    snapshot.forEach((doc) => {
      const { name, email, roles, affiliation, discord } = doc.data();
      output.push({
        uid: doc.id,
        name: name,
        email: email,
        discord: discord,
        affiliation: affiliation,
        status: roles.committees,
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
  const { auth, message } = await authenticate({
    admins: 1,
  });

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
          "roles.committees": deleteField(),
        });
      } else if (attribute === "status") {
        await updateDoc(doc(db, "users", object.uid), {
          "roles.committees": status,
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
