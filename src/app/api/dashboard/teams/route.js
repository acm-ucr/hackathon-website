import { NextResponse } from "next/server";
import { db } from "@/utils/firebase";
import {
  doc,
  collection,
  getDocs,
  query,
  where,
  deleteField,
  updateDoc,
  deleteDoc,
  getDoc,
  orderBy,
  limit,
  endBefore,
  limitToLast,
  startAfter,
  getCountFromServer,
} from "firebase/firestore";
import { authenticate } from "@/utils/auth";
import { AUTH } from "@/data/admin/Dashboard";

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
      { status: auth }
    );
  }

  const output = [];
  try {
    let snapshot;

    if (direction === "next" && last !== "undefined") {
      const lastDocument = await getDoc(doc(db, "teams", last));

      snapshot = await getDocs(
        query(
          collection(db, "teams"),
          orderBy(`status`),
          where(`status`, "in", [-1, 0, 1]),
          startAfter(lastDocument),
          limit(size)
        )
      );
    } else if (direction === "prev" && first !== "undefined") {
      const firstDocument = await getDoc(doc(db, "teams", first));

      snapshot = await getDocs(
        query(
          collection(db, "teams"),
          orderBy(`status`),
          where(`status`, "in", [-1, 0, 1]),
          endBefore(firstDocument),
          limitToLast(size)
        )
      );
    } else {
      snapshot = await getDocs(
        query(
          collection(db, "teams"),
          orderBy(`status`),
          where(`status`, "in", [-1, 0, 1]),
          limit(size)
        )
      );
    }

    snapshot.forEach((doc) => {
      const { links, status, members, timestamp, name } = doc.data();

      const formattedNames = members.map((member) => member.name);
      const formattedDiscords = members.map((member) => member.discord);
      const formattedUids = members.map((member) => member.uid);
      const formattedLinks = Object.entries(links)
        .filter(([key, value]) => value !== "")
        .map(([key, value]) => {
          return { name: key, link: value };
        });

      output.push({
        name: name,
        links: formattedLinks,
        members: formattedNames,
        discords: formattedDiscords,
        uids: formattedUids,
        status,
        uid: doc.id,
        selected: false,
        hidden: false,
        timestamp: timestamp || new Date(),
      });
    });

    const countFromServer = await getCountFromServer(
      query(collection(db, "teams"), where(`status`, "in", [-1, 0, 1]))
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
      { status: 200 }
    );
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 }
    );
  }
};

export const PUT = async (req) => {
  const res = NextResponse;
  const { objects, status } = await req.json();
  const { auth, message } = await authenticate(AUTH.PUT);

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${message}` },
      { status: auth }
    );
  }
  try {
    objects.map(async (object) => {
      await updateDoc(doc(db, "teams", object.uid), {
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
};

export const DELETE = async (req) => {
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
      const members = await getDocs(
        query(collection(db, "users"), where("team", "==", object))
      );
      members.docs.forEach(async (member) => {
        await updateDoc(doc(db, "users", member.id), {
          team: deleteField(),
        });
      });
      await deleteDoc(doc(db, "teams", object));
    });
    return res.json({ message: "OK" }, { status: 200 });
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 }
    );
  }
};
