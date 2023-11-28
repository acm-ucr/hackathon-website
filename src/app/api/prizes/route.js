import { NextResponse } from "next/server";
import { db } from "../../../../firebase";
import {
  doc,
  updateDoc,
  setDoc,
  collection,
  getDocs,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import { authenticate } from "@/utils/auth";

export async function POST(req) {
  const res = NextResponse;
  const { auth, message } = await authenticate();

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${message}` },
      { status: auth }
    );
  }
  const { prize, category, team, uid, id } = await req.json();

  try {
    await setDoc(doc(db, "prizes", uid), {
      prize: prize,
      category: category,
      team: team,
      status: 0,
      id: id,
    });

    if (id !== "") {
      await updateDoc(doc(db, "teams", id), {
        status: "winner",
      });
    }

    return res.json({ message: "OK" }, { status: 200 });
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 }
    );
  }
}

export async function GET() {
  const res = NextResponse;
  const { auth, message } = await authenticate({
    admins: [1],
  });

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${message}` },
      { status: auth }
    );
  }

  const prizes = [];
  const teams = [];

  try {
    const prizesSnapshot = await getDocs(collection(db, "prizes"));
    prizesSnapshot.forEach((doc) => {
      prizes.push({
        ...doc.data(),
        uid: doc.id,
        selected: false,
        hidden: false,
      });
    });

    const teamsSnapshot = await getDocs(
      query(collection(db, "teams"), where("status", "in", [1, 2]))
    );
    teamsSnapshot.forEach((doc) => {
      const { name } = doc.data();
      teams.push({ name, id: doc.id });
    });

    return res.json(
      { message: "OK", items: { prizes, teams } },
      { status: 200 }
    );
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 }
    );
  }
}

export async function PUT(req) {
  const res = NextResponse;
  const { auth, message } = await authenticate({
    admins: [1],
  });

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${message}` },
      { status: auth }
    );
  }

  const {
    prize,
    category,
    team,
    id,
    uid,
    backupId,
    attribute,
    objects,
    status,
  } = await req.json();

  try {
    if (attribute === "status") {
      objects.forEach(async (object) => {
        await updateDoc(doc(db, "prizes", object.uid), {
          status: status,
        });
      });
    } else {
      await updateDoc(doc(db, "prizes", uid), {
        prize: prize,
        category: category,
        team: team,
      });

      if (backupId !== id && backupId !== "") {
        await updateDoc(doc(db, "teams", backupId), {
          status: "qualify",
        });
      }

      if (id !== "") {
        await updateDoc(doc(db, "teams", id), {
          status: "winner",
        });
      }
    }

    return res.json({ message: "OK" }, { status: 200 });
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  const res = NextResponse;
  const { auth, message } = await authenticate({
    admins: [1],
  });

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${message}` },
      { status: auth }
    );
  }

  const ids = req.nextUrl.searchParams.get("ids").split(",");
  const teams = req.nextUrl.searchParams.get("teams").split(",");
  try {
    ids.forEach(async (id) => {
      await deleteDoc(doc(db, "prizes", id));
    });

    teams.forEach(async (id) => {
      if (id !== "") {
        await updateDoc(doc(db, "teams", id), {
          status: "qualify",
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
