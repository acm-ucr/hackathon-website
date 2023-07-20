import React from "react";
import { BiEdit, BiExit } from "react-icons/bi";
import { GiCancel } from "react-icons/gi";

const buttonType = {
  edit: {
    background: "bg-hackathon-blue-100",
    text: "text-white",
    icon: <BiEdit />,
  },

  cancel: {
    background: "bg-hackathon-gray",
    text: "text-hackathon-blue-200",
    icon: <GiCancel />,
  },
  leavetheteam: {
    background: "bg-hackathon-blue-100",
    text: "text-white",
    icon: <BiExit />,
  },
};

const ProfileButton = ({ name }) => {
  const button =
    name === "edit"
      ? buttonType["edit"]
      : name === "cancel"
      ? buttonType["cancel"]
      : name === "leave the team"
      ? buttonType["leavetheteam"]
      : undefined;

  return (
    <div
      className={`${button.background} ${button.text} flex flex-row items-center rounded-full font-light text-s p-1 w-40`}
    >
      <div className="flex justify-center w-1/5">{button.icon}</div>
      <div className="flex flex-nowrap justify-center w-4/5">{name}</div>
    </div>
  );
};

export default ProfileButton;
