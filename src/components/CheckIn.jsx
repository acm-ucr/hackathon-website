"use client";

import React from "react";
import Image from "next/image.js";
// import Title from "../../../components/Title.jsx"
import { QRCodeSVG } from "qrcode.react";
import LOGO from "../../public/LOGO.png";

const mockuser = {
  name: "Big Chungus",
  email: "big.chungus@email.com",
  pfp: LOGO,
  uid: 123456789,
};

const Timer = () => {
  const date = new Date();
  const [currentTime, setCurrentTime] = React.useState("");

  React.useEffect(() => {
    const letTime = date.toLocaleTimeString("en-US", { hour12: true });

    const setTime = setInterval(() => {
      setCurrentTime(letTime);
    }, 1000);

    return () => clearInterval(setTime);
  }, [currentTime]);
  return <> {currentTime} </>;
};

const CheckinPage = () => {
  return (
    <div className="flex w-full flex-col h-[calc(100vh-48px)]">
      <p className="hidden lg:block text-left text-3xl font-bold px-[1%] pt-[1%] m-0">
        Check In
      </p>
      <div className="flex flex-col h-full lg:flex-row">
        <div className="flex flex-col items-center m-auto">
          <Image
            src={mockuser.pfp}
            className="w-40 h-40 rounded-full overflow-hidden"
            alt="Picture of user's profile"
          />
          <p className="text-2xl font-bold">{mockuser.name}</p>
          <p className="text-base">{mockuser.email}</p>
        </div>
        <div className="bg-white w-2/3 h-1/3 lg:h-5/6 flex justify-center items-center flex-col rounded-lg m-auto">
          <QRCodeSVG value={mockuser?.email} className="w-2/3 h-2/3" />
          <Timer />
        </div>
      </div>
    </div>
  );
};

export default CheckinPage;
