import React from "react";
import Link from "next/link";

const Tile = ({ icon, text, destination }) => {
  return (
    <Link href={destination} className="w-1/2">
      <div className="bg-white h-32 rounded-xl p-7 gap-5 shadow-xl flex items-center">
        <div className="text-black" style={{ fontSize: 85 }}>
          {icon}
        </div>
        <div className="text-black font-bold text-2xl leading-9">{text}</div>
      </div>
    </Link>
  );
};

export default Tile;
