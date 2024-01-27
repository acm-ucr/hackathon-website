"use client";

import Image from "next/image.js";
import Title from "../admin/Title.jsx";
import { QRCodeSVG } from "qrcode.react";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

const CheckinPage = () => {
  const [date, setDate] = useState(new Date());
  const { data: session } = useSession();

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex w-full flex-col h-[calc(100vh-48px)]">
      <div className="pb-3 pt-4">
        <Title title="Check In" />
      </div>
      <div className="flex flex-col h-full lg:flex-row">
        <div className="flex flex-col items-center m-auto">
          <Image
            width={125}
            height={125}
            src={session.user.image}
            className="rounded-full overflow-hidden"
            alt="Picture of user's profile"
          />
          <p className="text-2xl font-bold">{session.user.name}</p>
          <p className="text-base">{session.user.email}</p>
        </div>
        <div className="bg-white w-2/3 h-1/3 lg:h-5/6 flex justify-center items-center flex-col rounded-lg m-auto">
          <QRCodeSVG
            value={`${session.user.id}&${date.toISOString()}&${
              session.user.name
            }`}
            className="w-2/3 h-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default CheckinPage;
