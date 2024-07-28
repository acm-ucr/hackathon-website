const Status = ({ isComplete, paused }) => {
  if (isComplete) {
    return (
      <div className="mt-4 rounded-full border-2 border-hackathon-tags-teal-text bg-hackathon-tags-teal-bg p-1 px-3 text-center text-lg text-hackathon-tags-teal-text">
        Completed
      </div>
    );
  }
  if (paused) {
    return (
      <div className="mt-4 rounded-full border-2 border-hackathon-tags-red-text bg-hackathon-tags-red-bg p-1 px-3 text-center text-lg text-hackathon-tags-red-text">
        Not Running
      </div>
    );
  }
  return (
    <div className="mt-4 rounded-full border-2 border-hackathon-tags-yellow-text bg-hackathon-tags-yellow-bg p-1 px-3 text-center text-lg text-hackathon-tags-yellow-text">
      Running
    </div>
  );
};

export default Status;
