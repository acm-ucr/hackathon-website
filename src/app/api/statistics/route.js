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
      { status: auth },
    );
  }

  try {
    const [statistics, events] = await Promise.all([
      getDoc(doc(db, "statistics", "statistics")),
      getDocs(collection(db, "events")),
    ]);
    const {
      teams,
      participants,
      volunteers,
      judges,
      mentors,
      committees,
      sponsors,
      panels,
      admins,
    } = statistics.data();
    console.log(statistics.data());
    const attendees = {};

    events.forEach((doc) => {
      const { name, attendance } = doc.data();
      attendees[name] = attendance;
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

    // console.log(users);
    const sizeData = ["XS", "S", "M", "L", "XL", "XXL"];
    const statusData = ["1", "0", "-1"];

    const size = {};
    const status = {};
    const school = {};

    Object.entries(users).forEach(([group, entries]) => {
      size[group] = Object.fromEntries(
        Object.entries(entries).filter(([key]) => sizeData.includes(key)),
      );

      status[group] = Object.fromEntries(
        Object.entries(entries).filter(([key]) => statusData.includes(key)),
      );

      status[group] = Object.fromEntries(
        Object.entries(entries).filter(([key]) => statusData.includes(key)),
      );
    });

    return res.json(
      { items: { users: { status, size, school }, events: attendees } },
      { status: 200 },
    );
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 },
    );
  }
};
