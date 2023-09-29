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
  query,
  where,
} from "firebase/firestore";

export async function POST(req) {
  const res = NextResponse;
  const { prize, category, team, uid, id } = await req.json();
  const session = await getServerSession(authOptions);

  if (session) {
    try {
      await setDoc(doc(db, "prizes", uid), {
        prize: prize,
        category: category,
        team: team,
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
  const prizes = [];
  const teams = [];

  if (session) {
    if (session.user.role.includes("admins")) {
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
          query(
            collection(db, "teams"),
            where("status", "in", ["qualify", "winner"])
          )
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
  const { prize, category, team, id, uid, backupId } = await req.json();
  const session = await getServerSession(authOptions);

  if (session) {
    if (session.user.role.includes("admins")) {
      try {
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
  const teams = req.nextUrl.searchParams.get("teams").split(",");
  const session = await getServerSession(authOptions);

  if (session) {
    if (session.user.role.includes("admins")) {
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
