"use client";
import { useEffect, useState } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Toolbar from "./Toolbar";
import Event from "./Event";
import Modal from "./Modal";
import { LABELS } from "@/data/dynamic/admin/Calendar";
import { api } from "@/utils/api";
const mLocalizer = momentLocalizer(moment);

const CalendarEvents = () => {
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState();
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState("month");

  const handleShortcuts = (e) => {
    switch (e.key) {
      case "m":
        setView("month");
        break;
      case "w":
        setView("week");
        break;
    }
  };

  useEffect(() => {
    const hackathon = api({
      method: "GET",
      url: `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime`,
    });

    const leads = api({
      method: "GET",
      url: `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_LEADS}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime`,
    });

    Promise.all([hackathon, leads]).then(([hackathonData, leadsData]) => {
      const hackathonItems = hackathonData.items;
      const leadsItems = leadsData.items;

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

      setEvents(rawEvents);
    });

    document.addEventListener("keydown", handleShortcuts);
    return () => document.removeEventListener("keydown", handleShortcuts);
  }, []);

  return (
    <div className="relative h-screen">
      {event && <Modal event={event} setEvent={setEvent} />}
      {events && (
        <Calendar
          date={date}
          view={view}
          className="py-4"
          step={15}
          events={events.filter((event) => !event.hidden)}
          localizer={mLocalizer}
          defaultView="month"
          views={["month", "week"]}
          onNavigate={(newDate) => setDate(newDate)}
          onView={(newView) => setView(newView)}
          components={{
            event: (props) => <Event {...props} view={view} />,
            toolbar: (props) => (
              <Toolbar {...props} events={events} setEvents={setEvents} />
            ),
          }}
          eventPropGetter={(event) => {
            return { className: event.color };
          }}
          dayPropGetter={(event) => {
            const bg =
              new Date(event).toLocaleDateString() ==
              new Date().toLocaleDateString()
                ? "!bg-hackathon-green-100"
                : "!bg-white";
            return {
              className: bg,
              style: {
                margin: 0,
                padding: 0,
              },
            };
          }}
          onSelectEvent={(event) => setEvent(event)}
        />
      )}
    </div>
  );
};

export default CalendarEvents;
