import { NextResponse } from "next/server";
import { db } from "../../../utils/firebase";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { authenticate } from "@/utils/auth";

export const GET = async () => {
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
    const {
      teams: { 1: teams },
      participants: { 1: participants },
      volunteers: { 1: volunteers },
      judges: { 1: judges },
      mentors: { 1: mentors },
      committees: { 1: committees },
      sponsors: { 1: sponsors },
      panels: { 1: panels },
      admins: { 1: admins },
    } = (await getDoc(doc(db, "statistics", "statistics"))).data();

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
      panels,
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
};
