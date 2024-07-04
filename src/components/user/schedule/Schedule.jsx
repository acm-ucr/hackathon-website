"use client";
import { useState } from "react";
import Toolbar from "./Toolbar";
import Events from "./Events";

const Schedule = () => {
  const [filteredEvents, setFilteredEvents] = useState(mockEvents);

  const filterChange = (filterType) => {
    if (filterType === "all") {
      setFilteredEvents(mockEvents);
    } else {
      setFilteredEvents(
        mockEvents.filter((event) => event.type === filterType)
      );
    }
  };

  return (
    <>
      <Toolbar onFilterChange={filterChange} />
      <div className="mt-4">
        {filteredEvents.map((event) => (
          <div key={event.id} className="border p-2 mb-2">
            {event.title}
          </div>
        ))}
      </div>
      <Events />
    </>
  );
};

export default Schedule;

const mockEvents = [
  { id: 1, title: "Event 1", type: "all" },
  { id: 2, title: "HackWeek Event", type: "hackweek" },
  { id: 3, title: "Hackathon Event", type: "hackathon" },
  { id: 4, title: "Another Event", type: "all" },
  { id: 5, title: "More HackWeek", type: "hackweek" },
];
