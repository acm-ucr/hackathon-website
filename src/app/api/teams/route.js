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

export async function GET() {
  const res = NextResponse;
  const { auth } = await authenticate({
    admins: 1,
  });

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
      const { links, name, status, members } = doc.data();

      const formattedNames = members.map((member) => member.name);
      const formattedEmails = members.map((member) => member.email);
      const formattedUids = members.map((member) => member.uid);
      const formattedLinks = Object.entries(links).map(([key, value]) => {
        return { name: key, link: value };
      });

      output.push({
        links: formattedLinks,
        members: formattedNames,
        emails: formattedEmails,
        uids: formattedUids,
        name,
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
  const { auth } = await authenticate({
    admins: 1,
  });

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${"MESSAGE VARIABLE SHOULD BE HERE"}` },
      { status: auth }
    );
  }
  const { objects, attribute, status } = await req.json();

  try {
    await Promise.all(
      objects.map(async (object) => {
        const teamRef = doc(db, "teams", object.uid);

        if (attribute === "role") {
          // Check if the status of the team being deleted is "winner"
          const teamSnapshot = await teamRef.get();
          if (
            teamSnapshot.exists() &&
            teamSnapshot.data().status === "winner"
          ) {
            // Find the prize that has this team as the winner and update it
            const prizeSnapshot = await getDocs(collection(db, "prizes"));

            // Delete the teamId and teamName fields from the prize document
            prizeSnapshot.forEach(async (prizeDoc) => {
              if (prizeDoc.data().teamId === object.uid) {
                await updateDoc(doc(db, "prizes", prizeDoc.id), {
                  teamId: deleteField(),
                  teamName: deleteField(),
                });
              }
            });
          }

          // Delete the team after potentially updating the prize entry
          await deleteDoc(teamRef);
        } else if (attribute === "status") {
          await updateDoc(teamRef, { status: status });
        }
      })
    );

    return res.json({ message: "OK" }, { status: 200 });
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 }
    );
  }
}
