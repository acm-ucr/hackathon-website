"use client";
import { useState } from "react";
import Toolbar from "./Toolbar";
import Events from "./Events";

const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const Schedule = ({ eventList }) => {
  const [events, setEvents] = useState(eventList);
  const [filteredEvents, setFilteredEvents] = useState(eventList);

  const filterChange = (filterType) => {
    if (filterType === "all") {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter((event) => event.type === filterType));
    }
  };

  return (
    <>
      <Toolbar onFilterChange={filterChange} />
      <div className="flex sticky top-0 text-white w-full">
        {days.map((day, index) => (
          <div
            className="text-black font-montserrat font-light text-sm md:text-lg items-center justify-start flex flex-grow border-b-[1px] border-black m-5 ml-0"
            key={index}
          >
            {day}
          </div>
        ))}
      </div>
      <div className="flex mr-4">
        {days.map((day, dayIndex) => (
          <div
            key={dayIndex}
            className=" flex flex-col items-start w-full space-y-3 m-2 "
          >
            {filteredEvents
              .filter((event) => {
                if (day === "SUN" && event.day === 0) return true;
                if (day === "SAT" && event.day === 6) return true;
                return event.day === dayIndex + 1;
              })
              .map((events, eventIndex) => (
                <Events event={events} setEvents={setEvents} key={eventIndex} />
              ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Schedule;
