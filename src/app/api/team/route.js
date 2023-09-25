import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { db } from "../../../../firebase";
import { doc, getDoc, updateDoc, addDoc, collection } from "firebase/firestore";

export async function POST() {
  const res = NextResponse;
  const session = await getServerSession(authOptions);

  if (session) {
    try {
      const team = {
        name: "No Team Name",
        links: {
          github: "No Link",
          devpost: "No Link",
          figma: "No Link",
        },
        members: [{ email: session.user.email, name: session.user.name }],
        status: "pending",
      };
      const docRef = await addDoc(collection(db, "teams"), team);
      await updateDoc(doc(db, "users", session.user.id), {
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
    return res.json(
      { error: "Invalid Authentication Credentials." },
      { status: 401 }
    );
  }
}

export async function PUT(req) {
  const res = NextResponse;
  const { name, github, figma, devpost, members } = await req.json();
  const session = await getServerSession(authOptions);

  if (session) {
    try {
      await updateDoc(doc(db, "teams", session.user.team), {
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
    return res.json(
      { error: "Invalid Authentication Credentials." },
      { status: 401 }
    );
  }
}

export async function GET() {
  const res = NextResponse;
  const session = await getServerSession(authOptions);

  if (session) {
    try {
      const snapshot = await getDoc(doc(db, "teams", session.user.team));
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
    return res.json(
      { error: "Invalid Authentication Credentials" },
      { status: 401 }
    );
  }
}
