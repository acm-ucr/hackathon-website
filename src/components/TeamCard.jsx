import React from "react";
import ProfileButton from "./ProfileButton";
import { PiCopyBold } from "react-icons/pi";
import { BiEdit, BiExit } from "react-icons/bi";

const TeamCard = ({ team, devpost, members, teamID }) => {
  return (
    <div className="flex flex-col justify-center items-left rounded-xl text-l text-hackathon-darkgray font-bold bg-white px-10 py-4 m-6 w-[30%]">
      <p>Team</p>
      <p className="text-hackathon-darkgray font-normal">{team}</p>
      <p className="mt-2">Devpost</p>
      <p className="text-hackathon-darkgray font-normal">{devpost}</p>
      <p className="mt-2">Members</p>
      <p className="text-hackathon-darkgray font-normal">{members}</p>
      <hr className="mt-20 border-black border-t-2" />
      <div className="flex flex-row items-center mt-2">
        Team ID: <p className="text-hackathon-darkgray font-normal">{teamID}</p>
        <PiCopyBold className="ml-auto" />
      </div>
      <div className="flex flex-row justify-between w-full mt-20 mb-2">
        <ProfileButton name="leave the team" color="blue" icon={<BiExit />} />
        <ProfileButton name="edit" color="blue" icon={<BiEdit />} />
      </div>
    </div>
  );
};

export default TeamCard;
