import React from "react";
import ProfileButton from "./ProfileButton";
import { BiEdit } from "react-icons/bi";

const ProfileCard = ({ major, status, food, gender, school }) => {
  return (
    <div className="flex flex-col justify-center items-left rounded-xl text-l text-hackathon-darkgray font-bold bg-white px-10 py-4 m-6 w-[25%]">
      <p>major</p>
      <p className="text-hackathon-darkgray font-normal">{major}</p>
      <p className="mt-2">status</p>
      <p className="text-hackathon-darkgray font-normal">{status}</p>
      <p className="mt-2">food restriction</p>
      <p className="text-hackathon-darkgray font-normal">{food}</p>
      <p className="mt-2">gender</p>
      <p className="text-hackathon-darkgray font-normal">{gender}</p>
      <p className="mt-2">school</p>
      <p className="text-hackathon-darkgray font-normal">{school}</p>
      <div className="flex justify-center mt-20 mb-2">
        <ProfileButton name="edit" color="blue" icon={<BiEdit />} />
      </div>
    </div>
  );
};

export default ProfileCard;
