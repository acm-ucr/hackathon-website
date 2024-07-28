const Rooms = () => {
  const rooms = ["WCH 127", "WCH 110", "WCH 130", "Byte", "WCH 129"];

  return (
    <div className="mb-3 mt-3 rounded-lg bg-white p-3 font-bold shadow-xl">
      <div className="p-2" data-cy="rooms-title">
        🚪Hackrooms
      </div>
      {rooms.map((room, index) => (
        <div
          key={index}
          className="mb-3 mr-3 inline-block rounded-lg bg-hackathon-green-100 p-2 text-hackathon-tags-green-text shadow"
        >
          {room}
        </div>
      ))}
    </div>
  );
};

export default Rooms;
