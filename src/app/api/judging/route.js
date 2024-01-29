import { NextResponse } from "next/server";
import { db } from "../../../utils/firebase";
import {
  collection,
  doc,
  getDocs,
  updateDoc,
  query,
  where,
  deleteField,
} from "firebase/firestore";
import { authenticate } from "@/utils/auth";
import { AUTH } from "@/data/dynamic/admin/Dashboard";

export async function GET() {
  const res = NextResponse;
  const { auth, message } = await authenticate(AUTH.GET);

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${message}` },
      { status: auth }
    );
  }

  const teams = [];
  const judges = [];

  try {
    const teamsSnapshot = await getDocs(
      query(collection(db, "teams"), where("status", "==", 1))
    );
    teamsSnapshot.forEach((doc) => {
      const { links, name, rounds, table } = doc.data();

      if (links.devpost !== "") {
        const formattedRounds = rounds === undefined ? [] : JSON.parse(rounds);
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
      }
    });

    const judgesSnapshot = await getDocs(
      query(collection(db, "users"), where("roles.judges", "==", 1))
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
}

export async function DELETE(req) {
  const res = NextResponse;
  const { auth, message } = await authenticate(AUTH.DELETE);

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${message}` },
      { status: auth }
    );
  }

  const ids = req.nextUrl.searchParams.get("ids").split(",");

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
}

export async function PUT(req) {
  const res = NextResponse;
  const { auth, message } = await authenticate(AUTH.PUT);

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${message}` },
      { status: auth }
    );
  }

  const { teams } = await req.json();

  try {
    await Promise.all(
      teams.map(async (object) => {
        const rounds = JSON.stringify(object.rounds);
        await updateDoc(doc(db, "teams", object.uid), {
          table: object.table,
          rounds: rounds,
        });
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
