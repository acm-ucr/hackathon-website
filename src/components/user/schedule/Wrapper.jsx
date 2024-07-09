import { api } from "@/utils/api";
import Schedule from "./Schedule";

const ScheduleWrapper = async () => {
  const { items } = await api({
    url: `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime`,
    method: "GET",
  });

  items.forEach((event) => {
    event.start = new Date(event.start.dateTime);
    event.day = event.start.getDay();
  });

  return (
    <div>
      <Schedule eventList={items} />
    </div>
  );
};

export default ScheduleWrapper;
