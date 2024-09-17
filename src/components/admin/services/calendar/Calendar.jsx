"use client";
import { useEffect, useState } from "react";
import moment from "moment";
import {
  Calendar as ReactBigCalendar,
  momentLocalizer,
} from "react-big-calendar";
import Toolbar from "./Toolbar";
import Event from "./Event";
import Modal from "./Modal";
import { getEvents } from "./actions";
import { useQuery } from "@tanstack/react-query";
import "react-big-calendar/lib/css/react-big-calendar.css";

const Calendar = () => {
  const mLocalizer = momentLocalizer(moment);

  const [event, setEvent] = useState(null);
  const [view, setView] = useState("month");
  const [date, setDate] = useState(new Date());
  const [tag, setTag] = useState("all");

  const { data: events } = useQuery({
    queryKey: ["/admin/calendar"],
    queryFn: async () => getEvents(),
  });

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
    document.addEventListener("keydown", handleShortcuts);

    return () => {
      document.removeEventListener("keydown", handleShortcuts);
    };
  }, []);

  return (
    <>
      {event && <Modal event={event} setEvent={setEvent} />}
      <ReactBigCalendar
        startAccessor="startDate"
        endAccessor="endDate"
        date={date}
        view={view}
        className="py-4"
        step={15}
        events={
          tag === "all"
            ? events
            : events.filter((event) => event.category === tag)
        }
        localizer={mLocalizer}
        defaultView="month"
        views={["month", "week"]}
        formats={{
          eventTimeRangeFormat: ({ start }) =>
            mLocalizer.format(start, "hh:mm A\n"),
        }}
        onNavigate={(newDate) => setDate(newDate)}
        onView={(newView) => setView(newView)}
        components={{
          event: ({ event }) => <Event event={event} view={view} />,
          toolbar: ({ onView, onNavigate, date, view }) => (
            <Toolbar
              onView={onView}
              onNavigate={onNavigate}
              date={date}
              view={view}
              setTag={setTag}
            />
          ),
        }}
        eventPropGetter={(event) => {
          return {
            style: {
              border: "0px",
            },
            className: event.color,
          };
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
        onDrillDown={() => setView("week")}
      />
    </>
  );
};

export default Calendar;
