import React from "react";

const Events = ({ event }) => {
  return (
    <div
      className={` bg-white text-black flex flex-col p-3 rounded-lg w-full shadow-sm`}
    >
      <div className="font-extrabold text-sm">{event.summary}</div>
      <div className="flex flex-col gap-0 items-center justify-center w-full mt-2">
        <div className="w-full font-semibold text-xs md:text-sm">
          {event.location}
        </div>
        <div
          className={`${
            event.start < new Date()
              ? event.end > new Date()
                ? "bg-white/30 animate-bounce"
                : "opacity-70"
              : "bg-white/20"
          } py-0 flex w-full`}
        >
          <div className={`text-center text-xs md:text-sm`}>
            {event.start.getHours() === 12 ? 12 : event.start.getHours() % 12}:
            {event.start.getMinutes() < 10 && "0"}
            {event.start.getMinutes()}{" "}
            {event.start.getHours() >= 12 ? "PM " : "AM "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
