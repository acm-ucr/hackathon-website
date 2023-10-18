import { NextResponse } from "next/server";
import { db } from "../../../../firebase";
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { authenticate } from "@/utils/auth";

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
    const data = docSnap.data().events;
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

  const { uid, event } = await req.json();

  try {
    await updateDoc(doc(db, "users", uid), {
      events: arrayUnion(event),
    });
    return res.json({ message: "OK" }, { status: 200 });
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 }
    );
  }
}
