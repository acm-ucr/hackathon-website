import { NextResponse } from "next/server";
import { db } from "../../../utils/firebase";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { authenticate } from "@/utils/auth";

export async function GET() {
  const res = NextResponse;
  const { auth } = await authenticate({
    admins: [1],
  });

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${"MESSAGE VARIABLE SHOULD BE HERE"}` },
      { status: auth }
    );
  }

  try {
    const docStats = await getDoc(doc(db, "statistics", "statistics"));

    const participants = docStats.data().participants["1"];
    const volunteers = docStats.data().volunteers["1"];
    const judges = docStats.data().judges["1"];
    const mentors = docStats.data().mentors["1"];
    const committees = docStats.data().committees["1"];
    const sponsors = docStats.data().sponsors["1"];
    const admins = docStats.data().admins["1"];
    const teams = docStats.data().teams["1"];

    const events = await getDocs(collection(db, "events"));

    const eventAttendees = {};

    events.forEach((doc) => {
      const { name, attendance } = doc.data();
      eventAttendees[name] = attendance;
    });

    const users = {
      participants,
      teams,
      judges,
      volunteers,
      mentors,
      committees,
      sponsors,
      admins,
    };

    return res.json(
      { items: { users, events: eventAttendees } },
      { status: 200 }
    );
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 }
    );
  }
}
