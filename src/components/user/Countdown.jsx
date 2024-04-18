"use client";
import { useState, useEffect } from "react";
import data from "/src/data/Config.js";

const parts = data.end.split(" ");
const sec = parts[3].split(":");
const day = parseInt(parts[1]);
const month = parts[0];
const year = parseInt(parts[2]);
const monthIndex = new Date(Date.parse(month + " 1, " + year)).getMonth() + 1;
const endDate = new Date(year, monthIndex - 1, day, sec[0], sec[1], sec[2]);

const Digits = ({ value, unit }) => {
  return (
    <div className="flex flex-col items-center gap-4 last:hidden  sm:last:flex">
      <div className="flex gap-1 m-3 mb-0 lg:!gap-1">
        {value
          .toString()
          .padStart(2, "0")
          .split("")
          .map((digit, index) => (
            <div
              className="text-lg lg:text-3xl font-bold text-white bg-white bg-opacity-40 p-3 lg:min-w-11 lg:p-3 rounded-lg"
              key={index}
            >
              {digit}
            </div>
          ))}
      </div>
      <div className="text-white m-2 mt-0 text-xs ">{unit}</div>
    </div>
  );
};
const Countdown = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const timeLeft = endDate - new Date().getTime();
      timeLeft <= 0
        ? setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        : setCountdown({
            days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
            hours: Math.floor(
              (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            ),
            minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((timeLeft % (1000 * 60)) / 1000),
          });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" rounded-lg inline-flex-col inline-block bg-hackathon-green-300 mb-3 shadow-xl w-full text-center">
      <div className="font-bold text-white m-2 mb-0">HACKING ENDS IN</div>
      <div className="inline-flex font-bold">
        {Object.entries(countdown).map(([unit, value], index) => (
          <Digits key={index} unit={unit} value={value} />
        ))}
      </div>
    </div>
  );
};

export default Countdown;
