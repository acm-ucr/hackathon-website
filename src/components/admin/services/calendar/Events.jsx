/* eslint "@tanstack/query/exhaustive-deps": "off" */

import "react-big-calendar/lib/css/react-big-calendar.css";
import { LABELS } from "@/data/admin/Calendar";
import { api } from "@/utils/api";
import CalendarWrapper from "./CalendarWrapper";
import { useQuery } from "@tanstack/react-query";

const fetchHackathon = (min, max) => {
  return api({
    method: "GET",
    url: `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime&timeMin=${min}&timeMax=${max}`,
  }).then((res) => res.items);
};

const fetchLeads = (min, max) => {
  return api({
    method: "GET",
    url: `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_LEADS}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime&timeMin=${min}&timeMax=${max}`,
  }).then((res) => res.items);
};

const CalendarEvents = () => {
  const min = new Date(
    new Date().getTime() - 20 * 7 * 24 * 60 * 60 * 1000,
  ).toISOString();

  const max = new Date(
    new Date().getTime() + 20 * 7 * 24 * 60 * 60 * 1000,
  ).toISOString();

  const { data: hackathon } = useQuery({
    queryKey: ["hacakthon"],
    queryFn: () => fetchHackathon(min, max),
  });

  console.log("hackathon", hackathon);

  const { data: leads } = useQuery({
    queryKey: ["leads"],
    queryFn: () => fetchLeads(min, max),
  });

  const rawEvents = [...hackathon, ...leads];

  rawEvents.forEach((item) => {
    item.start = new Date(item.start.dateTime);
    item.end = new Date(item.end.dateTime);
    const [category, assignee] = item.description
      .split("\n")[0]
      .split("#")
      .map((item) => item.trim())
      .filter((item) => item !== "");
    item.category = category;
    item.color = LABELS[item.category].background;
    item.assignee = assignee;
    item.hidden = false;
  });

  return (
    <div className="relative h-screen">
      <CalendarWrapper events={rawEvents} />
    </div>
  );
};

export default CalendarEvents;
