import { LABELS } from "@/data/admin/Calendar";
import { api } from "@/utils/api";

const min = new Date(
  new Date().getTime() - 20 * 7 * 24 * 60 * 60 * 1000,
).toISOString();

const max = new Date(
  new Date().getTime() + 20 * 7 * 24 * 60 * 60 * 1000,
).toISOString();

export const getEvents = async () => {
  const hackathonResponse = await api({
    method: "GET",
    url: `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime&timeMin=${min}&timeMax=${max}`,
  });

  const leadsResponse = await api({
    method: "GET",
    url: `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_LEADS}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime&timeMin=${min}&timeMax=${max}`,
  });

  console.log(leadsResponse, hackathonResponse);

  const items = [...hackathonResponse.items, leadsResponse.items];

  items.forEach((item: any) => {
    item.start = new Date(item.start.dateTime);
    item.end = new Date(item.end.dateTime);
    const [category, assignee] = item.description
      .split("\n")[0]
      .split("#")
      .map((item: any) => item.trim())
      .filter((item: any) => item !== "");
    item.category = category;
    item.color = LABELS[item.category].background;
    item.assignee = assignee;
    item.hidden = false;
  });

  return items;
};
