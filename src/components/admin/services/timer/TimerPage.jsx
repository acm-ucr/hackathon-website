import { useState } from "react";
import Timer from "./Timer";
import { v4 as uuidv4 } from "uuid";

export default function TimerPage() {
  const [timerArray, setTimerArray] = useState([]);

  const addTimer = () => {
    setTimerArray([
      ...timerArray,
      {
        id: uuidv4(),
      },
    ]);
  };

  const clearAll = () => {
    setTimerArray([]);
  };

  const deleteTime = (id) => {
    setTimerArray(timerArray.filter((timer) => timer.id !== id));
  };

  return (
    <div className="h-[calc(100vh-8em)]">
      <div className="flex items-center md:my-6 my-4 align-middle justify-start">
        <h1 className="md:text-5xl text-3xl font-bold mx-10">Timer</h1>
        <button
          onClick={addTimer}
          className="group bg-hackathon-blue-100 md:p-2 p-1 mr-2 md:text-lg text-md text-hackathon-page font-semibold rounded-xl hover:bg-hackathon-blue-200"
        >
          + add timer
        </button>
        <button
          onClick={clearAll}
          className="bg-red-500 md:p-2 p-1 mr-2 md:text-lg text-md text-white font-semibold rounded-xl hover:bg-red-700"
        >
          clear all
        </button>
      </div>
      <div className="flex flex-col h-full shadow-inner overflow-x-hidden overflow-y-scroll min-w-full bg-gray-200 p-4 rounded-3xl scroll-smooth snap-y snap-always">
        {timerArray.length === 0 ? (
          <div className="absolute left-[50%] top-[50%] text-2xl font-bold opacity-30 transform-[translate(-50%,-50%)]">
            No timers
          </div>
        ) : (
          timerArray.map((timer) => (
            <Timer key={timer.id} onRemove={() => deleteTime(timer.id)} />
          ))
        )}
      </div>
    </div>
  );
}
