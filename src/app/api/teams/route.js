import { NextResponse } from "next/server";
import { db } from "../../../../firebase";
import {
  doc,
  updateDoc,
  deleteDoc,
  collection,
  getDocs,
  deleteField,
} from "firebase/firestore";
import { authenticate } from "@/utils/auth";
import { AUTH } from "@/data/dynamic/admin/Teams";

export async function GET() {
  const res = NextResponse;
  const { auth } = await authenticate(AUTH.GET);

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${"MESSAGE VARIABLE SHOULD BE HERE"}` },
      { status: auth }
    );
  }
  const output = [];

  try {
    const snapshot = await getDocs(collection(db, "teams"));
    snapshot.forEach((doc) => {
      const { links, status, members } = doc.data();

      const formattedNames = members.map((member) => member.name);
      const formattedEmails = members.map((member) => member.email);
      const formattedUids = members.map((member) => member.uid);
      const formattedLinks = Object.entries(links)
        .filter(([key, value]) => value !== "")
        .map(([key, value]) => {
          return { name: key, link: value };
        });

      output.push({
        links: formattedLinks,
        members: formattedNames,
        emails: formattedEmails,
        uids: formattedUids,
        status,
        uid: doc.id,
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
  const { auth } = await authenticate(AUTH.PUT);

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${"MESSAGE VARIABLE SHOULD BE HERE"}` },
      { status: auth }
    );
  }
  const { objects, attribute, status } = await req.json();

  try {
    objects.forEach(async (object) => {
      if (attribute === "role") {
        object.uids.forEach(async (member) => {
          await updateDoc(doc(db, "users", member), {
            team: deleteField(),
          });
        });
        await deleteDoc(doc(db, "teams", object.uid));
      } else if (attribute === "status") {
        await updateDoc(doc(db, "teams", object.uid), {
          status: status,
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
