import { NextResponse } from "next/server";
import { db } from "../../../../firebase";
import { doc, getDoc, updateDoc, addDoc, collection } from "firebase/firestore";
import { auth } from "@/utils/auth";

export async function POST() {
  const res = NextResponse;

  const { message, authCode, uid, email, name } = await auth(
    ["participants"],
    false
  );

  if (authCode === 200) {
    try {
      const team = {
        name: "No Team Name",
        links: {
          github: "No Link",
          devpost: "No Link",
          figma: "No Link",
        },
        members: [{ email: email, name: name }],
        status: "pending",
      };
      const docRef = await addDoc(collection(db, "teams"), team);
      await updateDoc(doc(db, "users", uid), {
        team: docRef.id,
      });
      return res.json(
        {
          message: "OK",
          items: { team: docRef.id },
        },
        { status: 200 }
      );
    } catch (err) {
      return res.json(
        { message: `Internal Server Error: ${err}` },
        { status: 500 }
      );
    }
  } else {
    return res.json({ message }, { status: authCode });
  }
}

export async function PUT(req) {
  const res = NextResponse;
  const teamData = await req.json();
  const { message, authCode, team } = await auth(["participants"], false);

  if (authCode === 200) {
    try {
      await updateDoc(doc(db, "teams", team), {
        name: teamData.name,
        links: {
          github: teamData.github,
          figma: teamData.figma,
          devpost: teamData.devpost,
        },
        members: teamData.members,
      });
      return res.json({ message: "OK" }, { status: 200 });
    } catch (err) {
      return res.json(
        { message: `Internal Server Error: ${err}` },
        { status: 500 }
      );
    }
  } else {
    return res.json({ message }, { status: authCode });
  }
}

export async function GET() {
  const res = NextResponse;
  const { message, authCode, team } = await auth(["participants"], false);

  if (authCode === 200) {
    try {
      const snapshot = await getDoc(doc(db, "teams", team));
      const { name, links, members } = snapshot.data();
      return res.json(
        {
          message: "OK",
          items: {
            name: name,
            github: links.github,
            devpost: links.devpost,
            figma: links.figma,
            members: members,
          },
        },
        { status: 200 }
      );
    } catch (err) {
      return res.json(
        { message: `Internal Server Error: ${err}` },
        { status: 500 }
      );
    }
  } else {
    return res.json({ message }, { status: authCode });
  }
}
