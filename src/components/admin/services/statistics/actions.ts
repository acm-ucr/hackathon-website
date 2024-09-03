import { db } from "@/utils/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

enum Status {
  pending = 0,
  accepted = 1,
  rejected = -1,
}

type Statuses = Record<keyof typeof Status, Status>;

enum Size {
  XS = "XS",
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
  XXL = "XXL",
}

type Sizes = Record<Size, number | undefined>;

enum StatsCategory {
  Teams = "teams",
  Participants = "participants",
  Volunteers = "volunteers",
  Judges = "judges",
  Mentors = "mentors",
  Committees = "committees",
  Sponsors = "sponsors",
  Panels = "panels",
  Admins = "admins",
}

type Stats = Record<StatsCategory, Sizes | Statuses>;

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

  const users: Record<StatsCategory, Sizes | Statuses> = {
    [StatsCategory.Admins]: admins,
    [StatsCategory.Participants]: participants,
    [StatsCategory.Teams]: teams,
    [StatsCategory.Judges]: judges,
    [StatsCategory.Volunteers]: volunteers,
    [StatsCategory.Mentors]: mentors,
    [StatsCategory.Committees]: committees,
    [StatsCategory.Sponsors]: sponsors,
    [StatsCategory.Panels]: panels,
  };

  const sizeData = ["XS", "S", "M", "L", "XL", "XXL"];
  const statusData = ["1", "0", "-1"];

  const defaultShirts: Sizes = {
    [Size.XS]: 0,
    [Size.S]: 0,
    [Size.M]: 0,
    [Size.L]: 0,
    [Size.XL]: 0,
    [Size.XXL]: 0,
  };

  const size: Record<StatsCategory, Sizes> = {
    [StatsCategory.Teams]: defaultShirts,
    [StatsCategory.Participants]: defaultShirts,
    [StatsCategory.Volunteers]: defaultShirts,
    [StatsCategory.Judges]: defaultShirts,
    [StatsCategory.Mentors]: defaultShirts,
    [StatsCategory.Committees]: defaultShirts,
    [StatsCategory.Sponsors]: defaultShirts,
    [StatsCategory.Panels]: defaultShirts,
    [StatsCategory.Admins]: defaultShirts,
  };

  const defaultRoles: Statuses = {
    pending: Status.pending,
    accepted: Status.accepted,
    rejected: Status.rejected,
  };

  const status: Record<StatsCategory, Statuses> = {
    [StatsCategory.Teams]: defaultRoles,
    [StatsCategory.Participants]: defaultRoles,
    [StatsCategory.Volunteers]: defaultRoles,
    [StatsCategory.Judges]: defaultRoles,
    [StatsCategory.Mentors]: defaultRoles,
    [StatsCategory.Committees]: defaultRoles,
    [StatsCategory.Sponsors]: defaultRoles,
    [StatsCategory.Panels]: defaultRoles,
    [StatsCategory.Admins]: defaultRoles,
  };

  Object.entries(users).forEach(([group, entries]) => {
    const role = group as keyof Stats;

    size[role] = Object.fromEntries(
      Object.entries(entries).filter(([key]) => sizeData.includes(key)),
    ) as Sizes;

    status[role] = Object.fromEntries(
      Object.entries(entries).filter(([key]) => statusData.includes(key)),
    ) as Statuses;
  });

  return { users: { status, size }, events: attendees };
};
