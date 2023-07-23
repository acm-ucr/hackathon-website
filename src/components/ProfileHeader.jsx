import React from "react";
import Image from "next/image.js";
import LOGO from "../../public/LOGO.png";

const ProfileHeader = ({ horizontal = true, email, name }) => {
  let flexDirection = "";
  horizontal ? (flexDirection = "flex-row") : (flexDirection = "flex-col");

  return (
    <div className={`flex ${flexDirection} items-center justify-center m-auto`}>
      <Image src={LOGO} className="w-32 mr-4 rounded-full overflow-hidden" />
      <div className="flex flex-col justify-center items-center">
        <p className="text-2xl font-bold">{name}</p>
        <p className="text-base">{email}</p>
      </div>
    </div>
  );
};
export default ProfileHeader;
