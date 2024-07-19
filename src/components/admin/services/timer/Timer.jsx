import { FaPlay, FaPause, FaUndo, FaTrashAlt } from "react-icons/fa";
import { useTimer } from "react-timer-hook";

export default function Timer({
  name,
  id,
  onRemove,
  expiryTimestamp,
  timeInSeconds,
}) {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
    autoStart: false,
  });

  return (
    <div
      key={id}
      className="flex flex-col  items-center justify-between bg-white p-4 rounded-xl mb-4 snap-start scroll-m-4"
    >
      <div className="w-full grid grid-cols-3 grid-rows-1 ">
        <input
          className="text-3xl font-semibold col-start-1 col-end-3 appearance-none outline-none pl-2 "
          placeholder="Enter Name"
          defaultValue={name}
        />
        <div className="flex items-center justify-self-end *:mx-3">
          <button
            onClick={isRunning ? pause : resume}
            className="text-2xl font-normal"
          >
            {isRunning ? <FaPause /> : <FaPlay />}
          </button>
          <button
            onClick={() => {
              const newTime = new Date();
              newTime.setSeconds(newTime.getSeconds() + timeInSeconds);
              restart(newTime);
              pause();
            }}
            className="text-2xl font-normal "
          >
            <FaUndo />
          </button>
          <button onClick={onRemove} className="text-2xl font-normal">
            <FaTrashAlt />
          </button>
        </div>
      </div>
      <div className="flex items-center mt-10">
        <span className=" font-bold flex">
          <div className="flex flex-col align-middle justify-center text-center">
            <div className="text-4xl mx-2 p-4 bg-gray-200 flex flex-col rounded-md font-semibold w-20">
              {days}
            </div>
            <div className="text-md font-normal">Days</div>
          </div>
          <div className="flex flex-col align-middle justify-center text-center">
            <div className="text-4xl mx-2 p-4 bg-gray-200 flex flex-col rounded-md font-semibold w-20">
              {hours}
            </div>
            <div className="text-md font-normal">Hours</div>
          </div>
          <div className="flex flex-col align-middle justify-center text-center">
            <div className="text-4xl mx-2 p-4 bg-gray-200 flex flex-col rounded-md font-semibold w-20">
              {minutes}
            </div>
            <div className="text-md font-normal">Minutes</div>
          </div>
          <div className="flex flex-col align-middle justify-center text-center">
            <div className="text-4xl mx-2 p-4 bg-gray-200 flex flex-col rounded-md font-semibold w-20">
              {seconds}
            </div>
            <div className="text-md font-normal">Seconds</div>
          </div>
        </span>
      </div>
      {isRunning ? (
        <div className=" mt-10 text-center text-lg bg-hackathon-tags-yellow-bg p-1 rounded-full px-3 text-hackathon-tags-yellow-text border-2 border-hackathon-tags-yellow-text">
          Running
        </div>
      ) : totalSeconds === 0 ? (
        <div className=" mt-10 text-center text-lg bg-hackathon-tags-teal-bg p-1 rounded-full px-3 text-hackathon-tags-teal-text border-2 border-hackathon-tags-teal-text">
          Completed
        </div>
      ) : (
        <div className=" mt-10 text-center text-lg bg-hackathon-tags-red-bg p-1 rounded-full px-3 text-hackathon-tags-red-text border-2 border-hackathon-tags-red-text">
          Not Running
        </div>
      )}
    </div>
  );
}
