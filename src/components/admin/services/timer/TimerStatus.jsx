const TimerStatus = ({ isComplete, paused }) => {
  if (isComplete) {
    return (
      <div className="mt-4 text-center text-lg bg-hackathon-tags-teal-bg p-1 rounded-full px-3 text-hackathon-tags-teal-text border-2 border-hackathon-tags-teal-text">
        Completed
      </div>
    );
  }
  if (paused) {
    return (
      <div className="mt-4 text-center text-lg bg-hackathon-tags-red-bg p-1 rounded-full px-3 text-hackathon-tags-red-text border-2 border-hackathon-tags-red-text">
        Not Running
      </div>
    );
  }
  return (
    <div className="mt-4 text-center text-lg bg-hackathon-tags-yellow-bg p-1 rounded-full px-3 text-hackathon-tags-yellow-text border-2 border-hackathon-tags-yellow-text">
      Running
    </div>
  );
};

export default TimerStatus;
