const Event = ({ event, view }) => {
  return (
    <div className="p-0.5">
      <p className="inline text-xs">
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
