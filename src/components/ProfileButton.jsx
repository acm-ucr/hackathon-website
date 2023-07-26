import React from "react";
// import { GiCancel } from "react-icons/gi";

const buttonType = {
  blue: {
    background: "bg-hackathon-blue-100",
    text: "text-white",
  },

  gray: {
    background: "bg-hackathon-gray",
    text: "text-hackathon-blue-200",
  },
};

const ProfileButton = ({ name, color, icon }) => {
  const button =
    color === "gray"
      ? buttonType["gray"]
      : color === "blue"
      ? buttonType["blue"]
      : undefined;

  return (
    <div
      className={`${button.background} ${button.text} flex flex-row items-center rounded-full font-light text-s p-1 w-40`}
    >
      <div className="flex justify-center w-1/5">{icon}</div>
      <div className="flex flex-nowrap justify-center w-4/5">{name}</div>
    </div>
  );
};

export default ProfileButton;
