const Event = ({ event, view }) => {
  return (
    <div className="p-0.5">
      <p className="inline text-xs">
        {event.summary}
        {view === "month" && (
          <>
            {" - "}
            {new Date(event.start).toLocaleTimeString(navigator.language, {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </>
        )}
      </p>
    </div>
  );
};

export default Event;
