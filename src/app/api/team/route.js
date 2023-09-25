import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { db } from "../../../../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export async function POST(req) {
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
          members: members,
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
      const { name, links, members } = (
        await getDoc(doc(db, "teams", session.user.team))
      ).data();
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

export async function DELETE() {
  // const res = NextResponse;
  const session = await getServerSession(authOptions);
  await updateDoc(doc(db, "teams", session.user.team), {
    members: deleteField(),
  });
  await updateDoc(doc(db, "users", session.user.uid), {
    team: deleteField(),
  });
}
