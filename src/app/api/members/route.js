import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { db } from "../../../../firebase";
import {
  doc,
  getDoc,
  updateDoc,
  arrayRemove,
  arrayUnion,
  deleteDoc,
  deleteField,
} from "firebase/firestore";

export async function DELETE(req) {
  const res = NextResponse;
  const session = await getServerSession(authOptions);
  const { members } = (
    await getDoc(doc(db, "teams", session.user.team))
  ).data();

  try {
    if (members.length <= 1)
      await deleteDoc(doc(db, "teams", session.user.team));
    else
      await updateDoc(doc(db, "teams", session.user.team), {
        members: arrayRemove({
          email: session.user.email,
          name: session.user.name,
        }),
      });
    await updateDoc(doc(db, "users", session.user.id), {
      team: deleteField(),
    });
    return res.json({ message: "OK" }, { status: 200 });
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 }
    );
  }
}

export async function PUT(req) {
  const res = NextResponse;
  const session = await getServerSession(authOptions);
  const { team } = await req.json();

  try {
    const snapshot = await getDoc(doc(db, "teams", team));
    if (!snapshot.exists())
      return res.json({ message: "Invalid Team ID" }, { status: 500 });
    const { members } = snapshot.data();
    if (members.length < 4) {
      await updateDoc(doc(db, "teams", team), {
        members: arrayUnion({
          email: session.user.email,
          name: session.user.name,
        }),
      });
      await updateDoc(doc(db, "users", session.user.id), {
        team: team,
      });
      return res.json({ message: "OK" }, { status: 200 });
    } else
      return res.json({ message: "Exceeded 4 People Limit" }, { status: 500 });
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 }
    );
  }
}
