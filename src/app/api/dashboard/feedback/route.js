import { NextResponse } from "next/server";
import { db } from "@/utils/firebase";
import {
  addDoc,
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { authenticate } from "@/utils/auth";
import { AUTH } from "@/data/dynamic/admin/Dashboard";

export async function POST(req) {
  const res = NextResponse;
  const { auth } = await authenticate(AUTH.POST);

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${message}` },
      { status: auth }
    );
  }

  const {
    rating,
    additionalComments,
    eventSource,
    improvements,
    notBeneficial,
    helpful,
  } = await req.json();

  try {
    await addDoc(collection(db, "feedback"), {
      rating: parseInt(rating),
      additionalComments,
      eventSource,
      improvements,
      notBeneficial,
      helpful,
      status: 0,
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
    const snapshot = await getDocs(collection(db, "feedback"));
    snapshot.forEach((doc) => {
      const {
        rating,
        additionalComments,
        eventSource,
        improvements,
        notBeneficial,
        helpful,
        status,
      } = doc.data();
      output.push({
        uid: doc.id,
        rating,
        additionalComments,
        eventSource,
        improvements,
        notBeneficial,
        helpful,
        status,
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
  const { auth, message } = await authenticate(AUTH.PUT);

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${message}` },
      { status: auth }
    );
  }

  const { objects, status } = await req.json();

  try {
    objects.map(async (object) => {
      await updateDoc(doc(db, "feedback", object.uid), {
        status: status,
      });
    });

    return res.json({ message: "OK" }, { status: 200 });
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  const res = NextResponse;
  const { auth, message } = await authenticate(AUTH.DELETE);
  const objects = req.nextUrl.searchParams.get("remove").split(",");

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${message}` },
      { status: auth }
    );
  }
  try {
    objects.map(async (object) => {
      await deleteDoc(doc(db, "feedback", object));
    });
    return res.json({ message: "OK" }, { status: 200 });
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 }
    );
  }
}
