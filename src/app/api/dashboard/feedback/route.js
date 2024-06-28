import { NextResponse } from "next/server";
import { db } from "@/utils/firebase";
import {
  addDoc,
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
  orderBy,
  endBefore,
  limitToLast,
  limit,
  getCountFromServer,
  query,
  where,
} from "firebase/firestore";
import { authenticate } from "@/utils/auth";
import { AUTH } from "@/data/admin/Dashboard";

export const POST = async (req) => {
  const res = NextResponse;
  const { auth } = await authenticate(AUTH.POST);

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${message}` },
      { status: auth },
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
      { status: 500 },
    );
  }
};

export const GET = async (req) => {
  const direction = req.nextUrl.searchParams.get("direction");
  const index = req.nextUrl.searchParams.get("index");
  const size = req.nextUrl.searchParams.get("size");
  const first = req.nextUrl.searchParams.get("first");
  const last = req.nextUrl.searchParams.get("last");

  const res = NextResponse;
  const { auth, message } = await authenticate(AUTH.GET);

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${message}` },
      { status: auth },
    );
  }

  const output = [];
  try {
    let snapshot;

    if (direction === "next" && last !== "undefined") {
      const lastDocument = await getDoc(doc(db, "feedback", last));

      snapshot = await getDocs(
        query(
          collection(db, "teams"),
          orderBy(`status`),
          where(`status`, "in", [-1, 0, 1]),
          startAfter(lastDocument),
          limit(size),
        ),
      );
    } else if (direction === "prev" && first !== "undefined") {
      const firstDocument = await getDoc(doc(db, "feedback", first));

      snapshot = await getDocs(
        query(
          collection(db, "feedback"),
          orderBy(`status`),
          where(`status`, "in", [-1, 0, 1]),
          endBefore(firstDocument),
          limitToLast(size),
        ),
      );
    } else {
      snapshot = await getDocs(
        query(
          collection(db, "feedback"),
          orderBy(`status`),
          where(`status`, "in", [-1, 0, 1]),
          limit(size),
        ),
      );
    }

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

    const countFromServer = await getCountFromServer(
      query(collection(db, "feedback"), where(`status`, "in", [-1, 0, 1])),
    );

    const total = countFromServer.data().count;
    const lastDoc = output.length > 0 ? output[output.length - 1].uid : "";
    const firstDoc = output.length > 0 ? output[0].uid : "";

    return res.json(
      {
        message: "OK",
        items: output,
        total: total,
        first: firstDoc,
        last: lastDoc,
        page: parseInt(index) + 1,
      },
      { status: 200 },
    );
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 },
    );
  }
};

export const PUT = async (req) => {
  const res = NextResponse;
  const { auth, message } = await authenticate(AUTH.PUT);

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${message}` },
      { status: auth },
    );
  }

  const { objects, status } = await req.json();

  try {
    await Promise.all(
      objects.map(async (object) => {
        await updateDoc(doc(db, "feedback", object.uid), {
          status: status,
        });
      }),
    );

    return res.json({ message: "OK" }, { status: 200 });
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 },
    );
  }
};

export const DELETE = async (req) => {
  const res = NextResponse;
  const { auth, message } = await authenticate(AUTH.DELETE);
  const objects = req.nextUrl.searchParams.get("remove").split(",");

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${message}` },
      { status: auth },
    );
  }
  try {
    await Promise.all(
      objects.map(async (object) => {
        await deleteDoc(doc(db, "feedback", object));
      }),
    );
    return res.json({ message: "OK" }, { status: 200 });
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 },
    );
  }
};
