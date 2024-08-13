import { api } from "@/utils/api";
import { authenticate } from "@/utils/auth";
import { db } from "@/utils/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

export const getStats = async () => {
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

  const sizeData = ["XS", "S", "M", "L", "XL", "XXL"];
  const statusData = ["1", "0", "-1"];

  const size = {};
  const status = {};

  Object.entries(users).forEach(([group, entries]) => {
    size[group] = Object.fromEntries(
      Object.entries(entries).filter(([key]) => sizeData.includes(key)),
    );

    status[group] = Object.fromEntries(
      Object.entries(entries).filter(([key]) => statusData.includes(key)),
    );
  });

  return { users: { status, size }, events: attendees };
};
