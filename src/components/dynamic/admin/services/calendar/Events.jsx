"use client";
import { useEffect, useState } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Toolbar from "./Toolbar";
import Event from "./Event";
import axios from "axios";
import Modal from "./Modal";
import { LABELS } from "@/data/dynamic/admin/Calendar";

const mLocalizer = momentLocalizer(moment);

const CalendarEvents = () => {
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState();
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState("month");

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime`
      )
      .then((response) => {
        const items = response.data.items.map((item) => {
          item.start = new Date(item.start.dateTime);
          item.end = new Date(item.end.dateTime);
          item.color =
            LABELS[
              item.description.split("\n")[1].split(": ")[1].toLowerCase()
            ].background;
          item.hidden = false;

          return item;
        });
        setEvents(items);
      });
  }, []);

  return (
    <div className="relative h-screen">
      {event && <Modal event={event} setEvent={setEvent} />}
      {events && (
        <Calendar
          date={date}
          view={view}
          className="py-4"
          events={events.filter((event) => !event.hidden)}
          localizer={mLocalizer}
          defaultView="month"
          views={["month", "week"]}
          onNavigate={(newDate) => setDate(newDate)}
          onView={(newView) => setView(newView)}
          components={{
            event: Event,
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
