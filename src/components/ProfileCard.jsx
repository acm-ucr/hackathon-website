import React from "react";
import ProfileButton from "./ProfileButton";
const ProfileCard = ({ major, status, food, gender, school }) => {
  return (
    <div className="flex flex-col justify-center items-left rounded-xl text-l text-hackathon-darkgray font-bold bg-white px-10 py-2 m-6">
      <p>major</p>
      <p className="text-hackathon-tags-gray-text font-normal">{major}</p>
      <p className="mt-2">status</p>
      <p className="text-hackathon-tags-gray-text font-normal">{status}</p>
      <p className="mt-2">food restriction</p>
      <p className="text-hackathon-tags-gray-text font-normal">{food}</p>
      <p className="mt-2">gender</p>
      <p className="text-hackathon-tags-gray-text font-normal">{gender}</p>
      <p className="mt-2">school</p>
      <p className="text-hackathon-tags-gray-text font-normal">{school}</p>
      <div className="flex justify-center mt-20 mb-2">
        <ProfileButton name="edit" />
      </div>
    </div>
  );
};

export default ProfileCard;
