import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { db } from "../../../../firebase";
import {
  collection,
  doc,
  getDocs,
  updateDoc,
  query,
  where,
  deleteField,
} from "firebase/firestore";

export async function GET() {
  const res = NextResponse;
  const session = await getServerSession(authOptions);
  const teams = [];
  const judges = [];

  if (session) {
    if (session.user.role.includes("admins")) {
      try {
        const teamsSnapshot = await getDocs(
          query(collection(db, "teams"), where("status", "==", "qualify"))
        );
        teamsSnapshot.forEach((doc) => {
          const { links, name, rounds, table } = doc.data();

          const formattedRounds =
            rounds === undefined ? [] : JSON.parse(rounds);
          const formattedTable = table === undefined ? "" : table;
          const formattedLinks = Object.entries(links).map(([key, value]) => {
            return { name: key, link: value };
          });

          teams.push({
            links: formattedLinks,
            rounds: formattedRounds,
            table: formattedTable,
            name,
            uid: doc.id,
            hidden: false,
          });
        });

        const judgesSnapshot = await getDocs(
          query(
            collection(db, "users"),
            where("role", "array-contains", "judges"),
            where("status", "==", "accept")
          )
        );
        judgesSnapshot.forEach((doc) => {
          const { affiliation, name } = doc.data();

          judges.push({
            affiliation,
            name,
            uid: doc.id,
          });
        });

        return res.json(
          { message: "OK", items: { teams, judges } },
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

export async function DELETE(req) {
  const res = NextResponse;
  const session = await getServerSession(authOptions);

  const ids = req.nextUrl.searchParams.get("ids").split(",");

  if (session) {
    if (session.user.role.includes("admins")) {
      try {
        ids.forEach(async (id) => {
          await updateDoc(doc(db, "teams", id), {
            table: deleteField(),
            rounds: deleteField(),
          });
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

export async function PUT(req) {
  const res = NextResponse;
  const { teams } = await req.json();
  const session = await getServerSession(authOptions);

  if (session) {
    if (session.user.role.includes("admins")) {
      try {
        teams.forEach(async (object) => {
          const rounds = JSON.stringify(object.rounds);
          await updateDoc(doc(db, "teams", object.uid), {
            table: object.table,
            rounds: rounds,
          });
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
