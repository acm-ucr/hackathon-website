"use client";
import { useState, useEffect } from "react";
import Toolbar from "./Toolbar";
import Events from "./Events";
import { api } from "@/utils/api";

const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const Schedule = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  useEffect(() => {
    api({
      method: "GET",
      url: `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime`,
    })
      .then((response) => {
        // let selected = null;
        const items = response.items.map((item) => {
          item.start = new Date(item.start.dateTime);
          item.end = new Date(item.end.dateTime);
          item.day = item.start.getDay();
          // const [category] = item.description
          //   .split("\n")[0]
          //   .split("#")
          //   .map((item) => item.trim())
          //   .filter((item) => item !== "");
          // item.category = category;
          // if (item.description.includes("http")) {
          //   const startIndex = item.description.indexOf("http");
          //   item.link = item.description.substring(startIndex);
          // }
          // item.description = item.description?.split("\n")[1];
          // if (!selected && item.start >= new Date())
          //   selected = item.start.getDay();
          return item;
        });
        setEvents(items);
        setFilteredEvents(items);
      })
      .catch((error) => {
        console.error("Failed to fetch events", error);
      });
  }, []);
  console.log(events);
  const filterChange = (filterType) => {
    if (filterType === "general") {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(
        events.filter((event) => event.category === filterType)
      );
    }
  };

  return (
    <>
      <Toolbar onFilterChange={filterChange} />
      <div className="flex text-white bg-white/10 w-full bg-red-200">
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
                <Events event={events} key={eventIndex} />
              ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Schedule;

// const mockEvents = [
//   {
//     day: 1,
//     category: "general",
//     summary: "mario kart",
//     location: "my house",
//     type: "all",
//     filter: "food",
//   },
//   {
//     day: 2,
//     category: "general",
//     summary: "mario kart",
//     location: "my house",
//     type: "all",
//     filter: "social",
//   },
//   {
//     day: 4,
//     category: "general",
//     summary: "mario krt",
//     location: "my house",
//     type: "all",
//     filter: "food",
//   },
//   {
//     day: 5,
//     category: "general",
//     summary: "mario kart",
//     location: "my house",
//     type: "hackathon",
//     filter: "food",
//   },
//   {
//     day: 6,
//     category: "food",
//     summary: "mario kart",
//     location: "my house",
//     type: "hackweek",
//     filter: "food",
//   },
//   {
//     day: 3,
//     category: "workshop",
//     summary: "mario kart",
//     location: "my house",
//     type: "hackweek",
//     filter: "meeting",
//   },
//   // { id: 2, title: "HackWeek Event", type: "hackweek" },
//   // { id: 3, title: "Hackathon Event", type: "hackathon" },
//   // { id: 4, title: "Another Event", type: "all" },
//   // { id: 5, title: "More HackWeek", type: "hackweek" },
// ];
