const Events = ({ event }) => {
  return (
    <div
      className={`flex w-full flex-col rounded-lg bg-white p-3 text-black shadow-sm`}
    >
      <div className="text-sm font-extrabold">{event.summary}</div>
      <div className="mt-2 flex w-full flex-col items-center justify-center gap-0">
        <div className="w-full text-xs font-semibold md:text-sm">
          {event.location}
        </div>
        <div
          className={`${
            event.start < new Date()
              ? event.end > new Date()
                ? "animate-bounce bg-white/30"
                : "opacity-70"
              : "bg-white/20"
          } flex w-full py-0`}
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
