"use client";
import { useState } from "react";

const Events = ({ events, totalDays }) => {
  const [selectedDay, setSelectedDay] = useState(
    new Date() > new Date(events[0].start)
      ? new Date().toLocaleString("en-US", {
          timeZone: "America/Los_Angeles",
          weekday: "long",
        })
      : "Monday"
  );

  return (
    <div className=" flex flex-col justify-center items-center ">
      <div className="text-base w-10/12 justify-between items-center mx-auto grid grid-cols-6 rounded border-2 border-black">
        {totalDays.map((day) => (
          <button
            key={day}
            className={`flex justify-center p-2 rounded focus:outline-none text-black ${
              selectedDay === day ? "bg-hackathon-blue-100" : "bg-transparent"
            }`}
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </button>
        ))}
      </div>
      <div className="mt-6 h-full w-10/12 ">
        {events
          .filter(({ day }) => day === selectedDay)
          .map(({ start, summary, description, location }, index) => (
            <div
              key={index}
              className="text-lg w-full py-3 font-semibold font-workSans px-4 grid grid-cols-4 justify-center items-center"
            >
              <p>
                {new Date(start).toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  timeZone: "America/Los_Angeles",
                })}
              </p>
              <p className="w-full flex justify-center ">{summary}</p>
              <p className="flex justify-center">
                {description.split("\n")[0].substr(1)}
              </p>
              <p className="flex justify-center ">{location}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Events;
