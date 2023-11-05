import { NextResponse } from "next/server";
import { db } from "../../../../firebase";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  Timestamp,
  query,
  where,
} from "firebase/firestore";
import { authenticate } from "@/utils/auth";
import { AUTH } from "@/data/dynamic/admin/Feedback";

export async function POST() {
  const res = NextResponse;
  const { auth, uid } = await authenticate(AUTH.POST);

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${message}` },
      { status: auth }
    );
  }

  try {
    await updateDoc(doc(db, "users", uid), {
      "roles.interests": 0,
      timestamp: Timestamp.now(),
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
      query(collection(db, "users"), where("roles.interests", "in", [-1, 0, 1]))
    );
    snapshot.forEach((doc) => {
      const { name, email, timestamp, roles } = doc.data();
      output.push({
        uid: doc.id,
        name,
        email,
        status: roles.interests,
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
          "roles.interests": deleteField(),
        });
      } else if (attribute === "status") {
        await updateDoc(doc(db, "users", object.uid), {
          "roles.interests": status,
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
