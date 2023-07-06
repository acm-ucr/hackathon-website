"use client";
import React, { useState } from "react";
import LOGO from "../../../public/LOGO.png";
import Image from "next/image";
import Link from "next/link";
import {
  BsFillPersonFill,
  BsPeopleFill,
  BsBarChartFill,
  BsGlobe2,
  BsBoxArrowInRight,
} from "react-icons/bs";
import { usePathname } from "next/navigation";
const iconStyle = "text-2xl m-2";
const tabs = [
  {
    name: "participants",
    link: "participants",
    icon: <BsFillPersonFill className={iconStyle} />,
  },
  {
    name: "teams",
    link: "teams",
    icon: <BsPeopleFill className={iconStyle} />,
  },
  {
    name: "statistics",
    link: "statistics",
    icon: <BsBarChartFill className={iconStyle} />,
  },
  {
    name: "website",
    link: "/",
    icon: <BsGlobe2 className={iconStyle} />,
  },
  {
    name: "sign out",
    link: "sign out",
    icon: <BsBoxArrowInRight className={iconStyle} />,
  },
];

const Navigation = () => {
  const pathName = usePathname();
  const [expand, setExpand] = useState(false);
  return (
    pathName.startsWith("/admin") && (
      <>
        <div className="flex lg:hidden w-full bg-hackathon-blue-200 h-12 items-center sticky z-50">
          <div
            className="flex hover:cursor-pointer"
            onClick={() => {
              setExpand(!expand);
            }}
          >
            <Image src={LOGO} className="w-10 h-10 mx-2" />
            <p className="text-white text-xl font-semibold my-0">
              {pathName.split("/")[2]}
            </p>
          </div>
        </div>
        <div
          className={
            expand
              ? "left-0 h-screen w-1/2 fixed z-10 lg:flex lg:w-[12%]"
              : `hidden lg:flex w-[12%] z-10`
          }
        >
          <div className="bg-hackathon-blue-200 h-screen flex flex-col justify-start items-center w-full">
            <div className="hidden lg:flex items-center my-3">
              <Image src={LOGO} className="w-1/3" />
              <p className="text-white font-bold text-2xl p-0 mx-1 my-0">
                ROSEHACK
              </p>
            </div>
            <div className="mt-24 w-full">
              {tabs.map((tab, index) => (
                <Link key={index} href={tab.link} className=" no-underline">
                  <div
                    onClick={() => setExpand(false)}
                    className={`w-full flex [&>*]:text-white justify-start items-center py-2 m-0 pl-4 ${
                      pathName.endsWith(tab.link)
                        ? "bg-hackathon-blue-100"
                        : "[&>*]:hover:text-hackathon-blue-100"
                    }`}
                  >
                    {tab.icon}
                    <p className="text-2xl m-0 p-0">{tab.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default Navigation;
