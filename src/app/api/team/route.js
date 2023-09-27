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
        name: "",
        links: {
          github: "",
          devpost: "",
          figma: "",
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
  const { name, github, figma, devpost, members } = await req.json();
  const { message, authCode, team } = await auth(["participants"], false);

  if (authCode === 200) {
    try {
      await updateDoc(doc(db, "teams", team), {
        name: name,
        links: {
          github: github,
          figma: figma,
          devpost: devpost,
        },
        members: members,
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

export async function GET(req) {
  const res = NextResponse;
  const team = req.nextUrl.searchParams.get("teamid");
  const { message, authCode } = await auth(["participants"], false);

  if (authCode === 200) {
    try {
      const snapshot = await getDoc(doc(db, "teams", team));
      if (!snapshot.exists())
        return res.json({ message: "Invalid Team ID" }, { status: 500 });
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
