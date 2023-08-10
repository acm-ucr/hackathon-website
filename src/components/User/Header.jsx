import React from "react";
import Image from "next/image.js";
import LOGO from "../../public/LOGO.png";

const Header = ({ horizontal = true }) => {
  const name = "Menthy Wu";
  const email = "menthyiscool@gmail.com";
  return (
    <div
      className={`flex ${
        horizontal ? "flex-row" : "flex-col"
      } items-center justify-center`}
    >
      <Image
        src={LOGO}
        alt="Picture of user's profile"
        className="w-32 mr-4 rounded-full overflow-hidden"
      />
      <div className="align-left">
        <p className="text-2xl font-bold mb-0">{name}</p>
        <p className="text-base">{email}</p>
      </div>
    </div>
  );
};
export default Header;
