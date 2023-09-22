import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { db } from "../../../../firebase";
import {
  doc,
  updateDoc,
  setDoc,
  collection,
  getDocs,
  deleteDoc,
} from "firebase/firestore";

export async function POST(req) {
  const res = NextResponse;
  const { name, category, team, uid } = await req.json();
  const session = await getServerSession(authOptions);

  if (session) {
    try {
      await setDoc(doc(db, "prizes", uid), {
        name: name,
        category: category,
        team: team,
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
  const output = [];

  if (session) {
    if (session.user.role.includes("admins")) {
      try {
        const snapshot = await getDocs(collection(db, "prizes"));
        snapshot.forEach((doc) => {
          output.push({
            ...doc.data(),
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
  const { name, category, team, uid } = await req.json();
  const session = await getServerSession(authOptions);

  if (session) {
    if (session.user.role.includes("admins")) {
      try {
        await updateDoc(doc(db, "prizes", uid), {
          name: name,
          category: category,
          team: team,
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

export async function DELETE(req) {
  const res = NextResponse;
  const ids = req.nextUrl.searchParams.get("ids").split(",");
  const session = await getServerSession(authOptions);

  if (session) {
    if (session.user.role.includes("admins")) {
      try {
        ids.forEach(async (id) => {
          await deleteDoc(doc(db, "prizes", id));
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
