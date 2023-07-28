import React from "react";
import Image from "next/image.js";
import LOGO from "../../public/LOGO.png";

const ProfileHeader = ({ horizontal = true, email, name }) => {
  return (
    <div
      className={`flex ${
        horizontal ? "flex-row" : "flex-col"
      } items-center justify-center m-auto`}
    >
      <Image
        src={LOGO}
        alt="Picture of user's profile"
        className="w-32 mr-4 rounded-full overflow-hidden"
      />
      <div className="flex flex-col justify-center items-center">
        <p className="text-2xl font-bold">{name}</p>
        <p className="text-base">{email}</p>
      </div>
    </div>
  );
};
export default ProfileHeader;
