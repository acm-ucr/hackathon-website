import { db } from "@/utils/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

type StatusKeys = "pending" | "accepted" | "rejected";
type StatusValues = -1 | 1 | 0;
type Status = Record<StatusKeys, StatusValues>;

type StatsKeys =
  | "teams"
  | "participants"
  | "volunteers"
  | "judges"
  | "mentors"
  | "committees"
  | "sponsors"
  | "panels"
  | "admins";
type Stats = Record<StatsKeys, Status>;

type Event = Record<"attendance", number> & Record<"name", string>;

export const getStats = async () => {
  const [statistics, events] = await Promise.all([
    getDoc(doc(db, "statistics", "statistics")),
    getDocs(collection(db, "events")),
  ]);

  const {
    participants,
    teams,
    volunteers,
    judges,
    mentors,
    committees,
    sponsors,
    panels,
    admins,
  } = statistics.data() as Stats;

  const attendees: Record<string, number> = {};

  events.forEach((doc) => {
    const { name, attendance } = doc.data() as Event;
    attendees[name] = attendance;
  });

  const users = {
    admins,
    participants,
    teams,
    judges,
    volunteers,
    mentors,
    committees,
    sponsors,
    panels,
  };

  return { users, events: attendees };
};
