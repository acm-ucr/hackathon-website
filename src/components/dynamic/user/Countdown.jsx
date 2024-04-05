import React, { useState, useEffect } from "react";
import data from "/src/data/Config.js";

const parts = data.end_date.split(" ");
const day = parseInt(parts[1]);
const month = parts[0];
const year = parseInt(parts[2]);
const monthIndex = new Date(Date.parse(month + " 1, " + year)).getMonth() + 1;
const endDate = new Date(year, monthIndex - 1, day, 23, 59, 59);

const Countdown = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = endDate - now;
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      timeLeft <= 0
        ? setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        : setCountdown({ days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-block bg-green-400 mr-3 mb-3 rounded-lg font-bold">
      <div className="m-2 text-white"> HACKING ENDS IN</div>

      <div className="m-3 mt-0 font flex space-x-4 text-white ">
        <div className="space-x-2">
          <div className="bg-opacity-40 bg-white p-3 rounded-md text-2xl min-w-10 inline-block">
            {countdown.days}
          </div>
          <div className=" text-center text-xs font-normal">Days</div>
        </div>
        <div>
          <div className="flex space-x-2">
            <div className="bg-opacity-40 bg-white p-3 rounded-md text-2xl w-10">
              {Math.floor(countdown.hours / 10)}
            </div>
            <div className="bg-opacity-40 bg-white p-3 rounded-md text-2xl w-10">
              {countdown.hours % 10}
            </div>
          </div>
          <div className=" text-center text-xs font-normal">Hours</div>
        </div>
        <div>
          <div className="flex space-x-2">
            <div className="bg-opacity-40 bg-white p-3 rounded-md text-2xl w-10">
              {Math.floor(countdown.minutes / 10)}{" "}
            </div>
            <div className="bg-opacity-40 bg-white p-3 rounded-md text-2xl w-10">
              {countdown.minutes % 10}{" "}
            </div>
          </div>
          <div className=" text-center text-xs font-normal">Minutes</div>
        </div>
        <div>
          <div className="flex space-x-2">
            <div className="bg-opacity-40 bg-white p-3 rounded-md text-2xl w-10">
              {Math.floor(countdown.seconds / 10)}{" "}
            </div>
            <div className="bg-opacity-40 bg-white p-3 rounded-md text-2xl w-10">
              {countdown.seconds % 10}{" "}
            </div>
          </div>
          <div className=" text-center text-xs font-normal">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
