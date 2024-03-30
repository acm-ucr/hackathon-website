import React from "react";

const Tile = ({ icon, text }) => {
  return (
    <div className="bg-white h-32 rounded-xl p-7 gap-5 shadow-xl flex items-center">
      <div>{icon}</div>
      <div className="text-black font-bold text-2xl leading-9">{text}</div>
    </div>
  );
};

export default Tile;
