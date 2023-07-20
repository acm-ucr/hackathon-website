import React from "react";
import { BiEdit } from "react-icons/bi";
import { GiCancel } from "react-icons/gi";

const buttonType = {
  edit: {
    background: "bg-hackathon-blue-100",
    text: "text-hackathon-gray",
    icon: <BiEdit />,
  },

  cancel: {
    background: "bg-hackathon-gray",
    text: "text-hackathon-blue-200",
    icon: <GiCancel />,
  },
};

const ProfileButton = ({ name }) => {
  const button = buttonType[name];
  return (
    <div
      className={`${button.background} ${button.text} flex flex-row items-center rounded-full font-light font-poppins-100 p-1 w-2/3`}
    >
      <div className="flex justify-center w-1/4">{button.icon}</div>
      <div className="flex justify-center w-3/4">{name}</div>
    </div>
  );
};

export default ProfileButton;
