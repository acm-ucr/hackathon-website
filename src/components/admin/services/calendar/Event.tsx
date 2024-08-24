import React from "react";

interface EventProps {
  event: {
    start: Date & string;
    summary: string;
  };
  view: string;
}

const Event: React.FC<EventProps> = ({ event, view }) => {
  return (
    <div className="p-0.5">
      <p className="inline text-xs" data-cy="event">
        {view === "month" && (
          <>
            {new Date(event.start).toLocaleTimeString(navigator.language, {
              hour: "2-digit",
              minute: "2-digit",
            })}
            {" - "}
          </>
        )}
        {event.summary}
      </p>
    </div>
  );
};

export default Event;
