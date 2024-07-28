import { useState } from "react";
import Clock from "./Clock";
import { v4 as uuidv4 } from "uuid";

const Timer = () => {
  const [timers, setTimers] = useState([]);

  const addTimer = () => {
    setTimers([
      ...timers,
      {
        id: uuidv4(),
      },
    ]);
  };

  const clearAll = () => {
    setTimers([]);
  };

  const deleteTimer = (id) => {
    setTimers(timers.filter((timer) => timer.id !== id));
  };

  return (
    <div className="h-[calc(100vh-8em)]">
      <div className="my-4 flex items-center justify-start align-middle md:my-6">
        <h1 className="mx-10 text-3xl font-bold md:text-5xl">Timer</h1>
        <button
          onClick={addTimer}
          className="text-md group mr-2 rounded-xl bg-hackathon-blue-100 p-1 font-semibold text-hackathon-page hover:bg-hackathon-blue-200 md:p-2 md:text-lg"
        >
          + add timer
        </button>
        <button
          onClick={clearAll}
          className="text-md mr-2 rounded-xl bg-red-500 p-1 font-semibold text-white hover:bg-red-700 md:p-2 md:text-lg"
        >
          clear all
        </button>
      </div>
      <div className="flex h-full min-w-full snap-y snap-always flex-col overflow-x-hidden overflow-y-scroll scroll-smooth rounded-3xl bg-gray-200 p-4 shadow-inner">
        {timers.length === 0 ? (
          <div className="transform-[translate(-50%,-50%)] absolute left-[50%] top-[50%] text-2xl font-bold opacity-30">
            No timers
          </div>
        ) : (
          timers.map((timer) => (
            <Clock key={timer.id} onRemove={() => deleteTimer(timer.id)} />
          ))
        )}
      </div>
    </div>
  );
};

export default Timer;
