import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { db } from "../../../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export async function GET() {
  const res = NextResponse;
  const session = await getServerSession(authOptions);
  const output = [];

  if (session) {
    if (session.user.role.includes("admins")) {
      try {
        const snapshot = await getDocs(
          query(collection(db, "teams"), where("status", "==", "qualify"))
        );
        snapshot.forEach((doc) => {
          const { links, name, rounds } = doc.data();

          const formattedLinks = Object.entries(links).map(([key, value]) => {
            return { name: key, link: value };
          });

          output.push({
            links: formattedLinks,
            rounds,
            name,
            uid: doc.id,
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
