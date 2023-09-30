import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { db } from "../../../../firebase";
import {
  doc,
  updateDoc,
  deleteDoc,
  collection,
  getDocs,
} from "firebase/firestore";

export async function GET() {
  const res = NextResponse;
  const session = await getServerSession(authOptions);
  const output = [];

  if (session) {
    if (session.user.role.includes("admins")) {
      try {
        const snapshot = await getDocs(collection(db, "teams"));
        snapshot.forEach((doc) => {
          const { links, name, status, members } = doc.data();

          const formattedNames = members.map((member) => member.name);
          const formattedEmails = members.map((member) => member.email);
          const formattedLinks = Object.entries(links).map(([key, value]) => {
            return { name: key, link: value };
          });
          const formattedStatus = { teams: status };

          output.push({
            links: formattedLinks,
            members: formattedNames,
            emails: formattedEmails,
            name,
            status: formattedStatus,
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
    } else {
      return res.json({ message: `Forbidden Access` }, { status: 403 });
    }
  } else {
    return res.json(
      { error: "Invalid Authentication Credentials" },
      { status: 401 }
    );
  }
}

export async function PUT(req) {
  const res = NextResponse;
  const { objects, attribute, status } = await req.json();
  const session = await getServerSession(authOptions);

  if (session) {
    if (session.user.role.includes("admins")) {
      try {
        objects.forEach(async (object) => {
          if (attribute === "role") {
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
    } else {
      return res.json({ message: `Forbidden Access` }, { status: 403 });
    }
  } else {
    return res.json(
      { error: "Invalid Authentication Credentials" },
      { status: 401 }
    );
  }
}
