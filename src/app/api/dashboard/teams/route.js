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
} from "firebase/firestore";
import { authenticate } from "@/utils/auth";
import { AUTH } from "@/data/dynamic/admin/Dashboard";

export async function GET(req, { params }) {
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
    const snapshot = await getDocs(collection(db, "teams"));
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

export async function PUT(req, { params }) {
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
}

export async function DELETE(req, { params }) {
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
}
