"use client";
import { useEffect } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import Toolbar from "./Toolbar";
import Event from "./Event";
import Modal from "./Modal";
const mLocalizer = momentLocalizer(moment);

const CalendarWrapper = () => {
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
      <Calendar
        date={date}
        view={view}
        className="py-4"
        step={15}
        events={events.filter((event) => !event.hidden)}
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
              events={events}
              setEvents={setEvents}
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

export default CalendarWrapper;
