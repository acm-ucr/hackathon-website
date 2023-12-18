import { NextResponse } from "next/server";
import { db } from "../../../utils/firebase";
import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  increment,
  setDoc,
} from "firebase/firestore";
import { authenticate } from "@/utils/auth";
import { validate } from "src/utils/validate.js";

export async function GET(req) {
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

  const uid = req.nextUrl.searchParams.get("uid");

  try {
    const docSnap = await getDoc(doc(db, "users", uid));
    const data = docSnap.data().events || [];
    return res.json({ message: "OK", items: data }, { status: 200 });
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

  const { uid, event, name } = await req.json();

  const validatation = {
    uid: [uid],
    event: [event],
    name: [name],
  };

  const results = validate(validatation);

  if (!results.valid) {
    return res.json(
      { message: `Validation Error: ${results.message}` },
      { status: 400 }
    );
  }

  try {
    await updateDoc(doc(db, "users", uid), {
      events: arrayUnion(event),
    });

    const data = await getDoc(doc(db, "events", event));
    if (data.exists()) {
      await updateDoc(doc(db, "events", event), {
        attendance: increment(1),
      });
    } else {
      await setDoc(doc(db, "events", event), {
        attendance: 1,
        name: name,
      });
    }

    return res.json({ message: "OK" }, { status: 200 });
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 }
    );
  }
}
