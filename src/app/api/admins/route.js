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
import { AUTH } from "@/data/admin/Admins";

export async function POST(req) {
  const res = NextResponse;
  const { auth, message, user } = await authenticate(AUTH.POST);

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
      "roles.admins": 0,
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
      query(collection(db, "users"), where("roles.admins", "in", [-1, 0, 1]))
    );
    snapshot.forEach((doc) => {
      const { name, email, roles, affiliation } = doc.data();

      output.push({
        uid: doc.id,
        name: name,
        email: email,
        affiliation: affiliation,
        status: roles.admins,
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
          "roles.admins": deleteField(),
        });
      } else if (attribute === "status") {
        await updateDoc(doc(db, "users", object.uid), {
          "roles.admins": status,
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
