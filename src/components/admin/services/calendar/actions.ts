import { LABELS, label } from "@/data/admin/Calendar";
import { api } from "@/utils/api";
import { Event } from "@/types/calendar";
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

  const items = [...hackathonResponse.items, leadsResponse.items][0];
  items.forEach((item: Event) => {
    item.startDate = new Date(item.start.dateTime);
    item.endDate = new Date(item.end.dateTime);
    let category: string = "other";
    let assignee: string = "";
    if (item.description) {
      [category, assignee] = item.description
        .split("\n")[0]
        .split("#")
        .map((item: string) => item.trim())
        .filter((item: string) => item !== "");
    } else {
      item.description = "N/A";
    }
    if (category in LABELS) {
      item.color = LABELS[category as keyof label].background;
    } else {
      category = "other";
      item.color = "!bg-hackathon-tags-gray-text";
    }
    item.category = category;
    item.assignee = assignee;
    item.hidden = false;
  });

  return items;
};
