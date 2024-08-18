import { db } from "@/utils/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

type Status = {
  pending: number;
  accepted: number;
  rejected: number;
};

type Sizes = {
  XS?: number;
  S?: number;
  M?: number;
  L?: number;
  XL?: number;
  XXL?: number;
};

interface Stats {
  teams: Status | Sizes;
  participants: Status | Sizes;
  volunteers: Status | Sizes;
  judges: Status | Sizes;
  mentors: Status | Sizes;
  committees: Status | Sizes;
  sponsors: Status | Sizes;
  panels: Status | Sizes;
  admins: Status | Sizes;
}

type Event = {
  attendance: number;
  name: string;
};

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

  const sizeData = ["XS", "S", "M", "L", "XL", "XXL"];
  const statusData = ["1", "0", "-1"];

  const defaultShirts: Sizes = {
    XS: 0,
    S: 0,
    M: 0,
    L: 0,
    XL: 0,
    XXL: 0,
  };

  const size = {
    teams: { ...defaultShirts },
    participants: { ...defaultShirts },
    volunteers: { ...defaultShirts },
    judges: { ...defaultShirts },
    mentors: { ...defaultShirts },
    committees: { ...defaultShirts },
    sponsors: { ...defaultShirts },
    panels: { ...defaultShirts },
    admins: { ...defaultShirts },
  };

  const defaultRoles: Status = {
    pending: 0,
    accepted: 0,
    rejected: 0,
  };

  const status = {
    teams: { ...defaultRoles },
    participants: { ...defaultRoles },
    volunteers: { ...defaultRoles },
    judges: { ...defaultRoles },
    mentors: { ...defaultRoles },
    committees: { ...defaultRoles },
    sponsors: { ...defaultRoles },
    panels: { ...defaultRoles },
    admins: { ...defaultRoles },
  };

  Object.entries(users).forEach(([group, entries]) => {
    const role = group as keyof Stats;

    size[role] = Object.fromEntries(
      Object.entries(entries).filter(([key]) => sizeData.includes(key)),
    ) as Sizes;

    status[role] = Object.fromEntries(
      Object.entries(entries).filter(([key]) => statusData.includes(key)),
    ) as Status;
  });

  return { users: { status, size }, events: attendees };
};
