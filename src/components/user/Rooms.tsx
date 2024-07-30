const rooms: string[] = ["WCH 127", "WCH 110", "WCH 130", "Byte", "WCH 129"];

const Rooms = (): React.ReactNode => {
  return (
    <div className="mb-3 mt-3 rounded-lg bg-white p-3 font-bold shadow-xl">
      <div className="p-2" data-cy="rooms-title">
        🚪Hackrooms
      </div>
      {rooms.map((room: string, index: number) => (
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
