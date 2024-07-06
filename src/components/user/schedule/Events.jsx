
import React from "react";

// const colors = {
//   general: {
//     bg: "bg-hackathon-blue-100",
//     text: "text-hackathon-blue-100",
//     border: "border-hackathon-blue-100",
//   },
//   food: {
//     bg: "bg-hackathon-blue-100",
//     text: "text-hackathon-blue-100",
//     border: "border-hackathon-blue-100",
//   },
//   hackathon: { bg: "bg-white", text: "text-white", border: "border-white" },
//   workshop: {
//     bg: "bg-purple-300",
//     text: "text-purple-300",
//     border: "border-purple-300",
//   },
// };

const Events = ({ event }) => {
  return (
    <div className="bg-white flex flex-col p-3 rounded-lg w-full shadow-sm">
      <div className="font-bold text-sm">{event.summary}</div>
      <div className="flex gap-0 items-center justify-center w-full py-1">
        <div
          className={`${
            event.start < new Date()
              ? event.end > new Date()
                ? "bg-white/30 animate-bounce"
                : "opacity-70"
              : "bg-white/20"
          } py-2 flex w-full`}
        >
          <div className={`text-center text-xs md:text-sm`}>
            {event.start.getHours() === 12 ? 12 : event.start.getHours() % 12}:
            {event.start.getMinutes() < 10 && "0"}
            {event.start.getMinutes()}{" "}
            {event.start.getHours() >= 12 ? "PM " : "AM "}
          </div>
        </div>

        <div className="w-full text-center text-xs md:text-sm">
          {event.location}
        </div>
      </div>
    </div>
  );
};

export default Events;
