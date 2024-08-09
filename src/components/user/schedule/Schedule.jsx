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
      <div 
        style={{ 
          position: 'sticky', 
          top: 0, 
          zIndex: 1000, 
          backgroundColor: '#f5f5f5' 
        }}
      >
       <Toolbar onFilterChange={filterChange} />
      </div>
      <div className="sticky top-7 z-50 flex w-full bg-gray-100 text-white">
        {days.map((day, index) => (
          <div
            className="font-montserrat m-5 ml-0 flex flex-grow items-center justify-start border-b-[1px] border-black text-sm font-light text-black md:text-lg"
            key={index}
          >
            {day}
          </div>
        ))}
      </div>
      <div className="mr-4 flex">
        {days.map((day, dayIndex) => (
          <div
            key={dayIndex}
            className="m-2 flex w-full flex-col items-start space-y-3"
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
