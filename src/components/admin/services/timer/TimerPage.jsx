import { useState } from "react";
import Timer from "./Timer";
import { v4 as uuidv4 } from "uuid";

export default function TimerPage() {
  const [timerArray, setTimerArray] = useState([]);
  const [boxVisbiility, setBoxVisibility] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerName, setTimerName] = useState("New Timer");
  const [isInputValid, setIsInputValid] = useState(false);

  const addTimer = () => {
    if (hours > 23 || minutes > 59 || seconds > 59) {
      setIsInputValid(true);
      return;
    }
    const time = new Date();
    time.setDate(time.getDate() + parseInt(days));
    time.setHours(time.getHours() + parseInt(hours));
    time.setMinutes(time.getMinutes() + parseInt(minutes));
    time.setSeconds(time.getSeconds() + parseInt(seconds));

    document.getElementById("timerName").value = "";
    document.getElementById("days").value = "";
    document.getElementById("hours").value = "";
    document.getElementById("minutes").value = "";
    document.getElementById("seconds").value = "";

    setDays(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);

    setBoxVisibility(false);
    setTimerArray([
      ...timerArray,
      {
        id: uuidv4(),
        name: timerName || "New Timer",
        timeStamp: time,
        timeInSeconds:
          parseInt(days) * 86400 +
          parseInt(hours) * 3600 +
          parseInt(minutes) * 60 +
          parseInt(seconds),
      },
    ]);
  };

  const toggleBox = () => {
    setBoxVisibility(!boxVisbiility);
  };

  const clearAll = () => {
    setTimerArray([]);
  };

  const deleteTime = (id) => {
    setTimerArray(timerArray.filter((timer) => timer.id !== id));
  };

  const timeStamp = new Date();
  timeStamp.setSeconds(timeStamp.getSeconds() + 10);

  return (
    <div className="h-[calc(100vh-8em)]">
      <div className="flex items-center md:my-6 my-4 align-middle justify-start">
        <h1 className="md:text-5xl text-3xl font-bold mx-10">Timer</h1>
        <button
          onClick={toggleBox}
          className="group bg-hackathon-blue-100 md:p-2 p-1 mr-2 md:text-lg text-md text-hackathon-page font-semibold rounded-xl hover:bg-hackathon-blue-200"
        >
          + add timer
        </button>
        <div
          className={` flex flex-col justify-center items-center p-3  absolute backdrop-blur-md border-hackathon-blue-200 border-2 border-double bg-hackathon-blue-100 bg-opacity-75 text-hackathon-page lg:w-1/3 w-10/12 origin-top *:text-md  ${
            boxVisbiility ? "scale-100" : "scale-0"
          } transition-all duration-75 ease-in-out rounded-xl top-20 border-opacity-40 `}
        >
          <div className="flex flex-col justify-between items-center w-full">
            <lable className="lg:text-xl text-lg font-semibold mb-2">
              Timer Name
            </lable>
            <input
              className="bg-white rounded-xl  p-2 w-full  text-center appearance-none outline-none lg:text-xl text-lg text-black"
              placeholder="Enter Timer Name"
              onChange={(e) => setTimerName(e.target.value)}
              id="timerName"
            />
          </div>
          <div className="flex flex-row justify-evenly w-full my-10 ">
            <div className="flex flex-col justify-between items-center">
              <input
                type="number"
                min="0"
                className="bg-white rounded-xl lg:h-16 lg:w-16 w-14 h-14 text-center appearance-none outline-none lg:text-xl text-lg text-black"
                placeholder="00"
                onChange={(e) => setDays(e.target.value)}
                id="days"
              />
              <lable className="lg:text-xl  text-lg">Days</lable>
            </div>

            <div className="flex flex-col justify-between items-center">
              <input
                type="number"
                max="23"
                min="0"
                className="bg-white w-14 h-14  rounded-xl lg:h-16 lg:w-16 text-center appearance-none outline-none lg:text-xl text-lg text-black"
                placeholder="00"
                onChange={(e) => setHours(e.target.value)}
                id="hours"
              />
              <lable className="text-lg">Hours</lable>
            </div>
            <div className="flex flex-col justify-between items-center">
              <input
                type="number"
                max="59"
                min="0"
                className="bg-white  rounded-xl lg:h-16 lg:w-16 w-14 h-14 text-center appearance-none outline-none lg:text-xl text-lg text-black"
                placeholder="00"
                onChange={(e) => setMinutes(e.target.value)}
                id="minutes"
              />
              <lable className="lg:text-xl text-lg">Minutes</lable>
            </div>
            <div className="flex flex-col justify-between items-center">
              <input
                type="number"
                max="59"
                min="0"
                className="bg-white  rounded-xl lg:h-16 lg:w-16 h-14 w-14 text-center appearance-none outline-none lg:text-xl text-lg text-black"
                placeholder="00"
                onChange={(e) => setSeconds(e.target.value)}
                id="seconds"
              />
              <lable className="lg:text-xl text-lg">Seconds</lable>
            </div>
          </div>
          {isInputValid && (
            <p className="text-hackathon-tags-red-text text-sm">
              Please fill all the fields correctly
            </p>
          )}
          <button
            className="h-fit md:p-2 p-1 mr-2 md:text-lg w-full text-md text-hackathon-page font-semibold rounded-xl bg-hackathon-blue-200"
            type="submit"
            onClick={addTimer}
          >
            {" "}
            Add Timer
          </button>
        </div>
        <button
          onClick={clearAll}
          className="bg-red-500 md:p-2 p-1 mr-2 md:text-lg text-md text-white font-semibold rounded-xl hover:bg-red-700"
        >
          clear all
        </button>
      </div>
      <div className="flex flex-col h-full shadow-inner overflow-x-hidden overflow-y-scroll min-w-full bg-gray-200 p-4 rounded-3xl scroll-smooth snap-y snap-always">
        {timerArray.map((timer) => {
          return (
            <Timer
              key={timer.id}
              name={timer.name}
              onRemove={() => {
                deleteTime(timer.id);
              }}
              expiryTimestamp={timer.timeStamp}
              timeInSeconds={timer.timeInSeconds}
            />
          );
        })}
      </div>
      <style jsx>{`
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
        }
        input[type="number"] {
          -moz-appearance: textfield;
        }
      `}</style>
      `
    </div>
  );
}
