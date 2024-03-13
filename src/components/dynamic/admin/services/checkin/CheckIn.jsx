import { api } from "@/utils/api";
import CheckInWrapper from "./CheckInWrapper";

const CheckIn = async () => {
  const retrieveInfo = async () => {
    api({
      method: "GET",
      url: `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime`,
    }).then(({ items }) => {
      items.map((event) => {
        return { id: event.id, name: event.summary, hidden: false };
      });
    });
  };

  const retrieveItems = async () => {
    const { items } = await api({
      method: "GET",
      url: `/api/checkin?uid=${user}`,
    });

    return items;
  };

  const { eventInfo } = retrieveInfo();

  const { items } = retrieveItems();

  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <CheckInWrapper data={eventInfo} item={items} />
    </div>
  );
};

export default CheckIn;
