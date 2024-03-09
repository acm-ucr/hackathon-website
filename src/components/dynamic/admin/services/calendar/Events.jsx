import "react-big-calendar/lib/css/react-big-calendar.css";
import { LABELS } from "@/data/dynamic/admin/Calendar";
import { api } from "@/utils/api";
import CalendarWrapper from "./CalendarWrapper";

const CalendarEvents = async () => {
  const min = new Date(
    new Date().getTime() - 20 * 7 * 24 * 60 * 60 * 1000
  ).toISOString();

  const max = new Date(
    new Date().getTime() + 20 * 7 * 24 * 60 * 60 * 1000
  ).toISOString();

  const hackathon = await api({
    method: "GET",
    url: `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime&timeMin=${min}&timeMax=${max}`,
  });

  const leads = await api({
    method: "GET",
    url: `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_LEADS}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime&timeMin=${min}&timeMax=${max}`,
  });

  const hackathonItems = hackathon.items;
  const leadsItems = leads.items;

  const rawEvents = [...hackathonItems, ...leadsItems];

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
      <CalendarWrapper data={rawEvents} />
    </div>
  );
};

export default CalendarEvents;
