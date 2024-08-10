"use client";

import Image from "next/image";
import Title from "../admin/Title";
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
    <div className="flex h-[calc(100vh-48px)] w-full flex-col">
      <div className="pb-3 pt-4">
        <Title title="Check In" />
      </div>
      <div className="flex h-full flex-col lg:flex-row">
        <div className="m-auto flex flex-col items-center">
          <Image
            width={125}
            height={125}
            src={session.user.image}
            className="overflow-hidden rounded-full"
            alt="Picture of user's profile"
          />
          <p className="text-2xl font-bold">{session.user.name}</p>
          <p className="text-base">{session.user.email}</p>
        </div>
        <div className="m-auto flex h-1/3 w-2/3 flex-col items-center justify-center rounded-lg bg-white lg:h-5/6">
          <QRCodeSVG
            value={`${session.user.id}&${date.toISOString()}&${
              session.user.name
            }`}
            className="h-2/3 w-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default CheckinPage;
