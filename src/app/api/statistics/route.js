import { NextResponse } from "next/server";
import { db } from "../../../utils/firebase";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { authenticate } from "@/utils/auth";

export const GET = async () => {
  const res = NextResponse;

  return authenticate({ admins: [1] })
    .then(({ auth }) => {
      if (auth !== 200) {
        return res.json(
          {
            message: `Authentication Error: ${"MESSAGE VARIABLE SHOULD BE HERE"}`,
          },
          { status: auth }
        );
      }

      const statisticsPromise = getDoc(doc(db, "statistics", "statistics"));
      const eventsPromise = getDocs(collection(db, "events"));

      return Promise.all([statisticsPromise, eventsPromise]);
    })
    .then(([statisticsSnapshot, eventsSnapshot]) => {
      const statisticsData = statisticsSnapshot.data();
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
      } = statisticsData;

      const eventAttendees = {};
      eventsSnapshot.forEach((doc) => {
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
    })
    .catch((err) => {
      return res.json(
        { message: `Internal Server Error: ${err}` },
        { status: 500 }
      );
    });
};
