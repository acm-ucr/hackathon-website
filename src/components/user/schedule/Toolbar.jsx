import { useState } from "react";

const Toolbar = ({ onFilterChange }) => {
  const [selected, setSelected] = useState("all");

  return (
    <div className="flex items-center justify-end mt-4">
      <div className="flex border-2 rounded-md bg-white ">
        <button
          onClick={() => {
            setSelected("all");
            onFilterChange("all");
          }}
          className={`px-3 py-1 m-0.5 ${
            selected === "all"
              ? "bg-hackathon-green-300 text-white rounded"
              : "bg-white text-black"
          }`}
        >
          All Events
        </button>
        <button
          onClick={() => {
            setSelected("hackweek");
            onFilterChange("hackweek");
          }}
          className={`px-3 py-1 m-0.5 ${
            selected === "hackweek"
              ? "bg-hackathon-green-300 text-white rounded"
              : "bg-white text-black"
          }`}
        >
          HackWeek
        </button>
        <button
          onClick={() => {
            setSelected("hackathon");
            onFilterChange("hackathon");
          }}
          className={`px-3 py-1 m-0.5 ${
            selected === "hackathon"
              ? "bg-hackathon-green-300 text-white rounded"
              : "bg-white text-black"
          }`}
        >
          Hackathon
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
