const Event = ({ event }) => {
  return (
    <div className="p-1">
      <p className="inline whitespace-nowrap">
        {event.summary}
        <br />
        {new Date(event.start).toLocaleTimeString(navigator.language, {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
    </div>
  );
};

export default Event;
