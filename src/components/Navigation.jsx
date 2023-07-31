"use client";

import React, { useState } from "react";
import LOGO from "../../public/LOGO.png";
import Image from "next/image";
import Link from "next/link";
import { AdminTabs, UserTabs } from "@/data/Navigation";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathName = usePathname();

  const tabs = pathName.startsWith("/admin")
    ? AdminTabs
    : pathName.startsWith("/user")
    ? UserTabs
    : null;

  const [expand, setExpand] = useState(false);
  return (
    tabs && (
      <>
        <div className="flex lg:hidden w-full bg-hackathon-blue-200 h-12 items-center sticky z-50">
          <div
            className="flex items-center hover:cursor-pointer"
            onClick={() => {
              setExpand(!expand);
            }}
          >
            <Image
              src={LOGO}
              className="w-10 h-10 mx-2"
              alt="Picture of RoseHack Logo"
            />
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
              <Image
                src={LOGO}
                className=" scale-90"
                alt="Picture of RoseHack Logo"
              />
              <p className="text-white font-bold text-lg pr-2 m-0">ROSEHACK</p>
            </div>
            <div className="mt-[30%] w-full">
              {tabs.map((tab, index) => (
                <Link key={index} href={tab.link} className=" no-underline">
                  <div
                    onClick={() => setExpand(false)}
                    className={`w-full flex [&>*]:text-white items-center justify-start pl-[10%] py-1 m-0 ${
                      pathName.endsWith(tab.link)
                        ? "bg-hackathon-blue-100"
                        : "[&>*]:hover:text-hackathon-blue-100"
                    }`}
                  >
                    {tab.icon}
                    <p className="text-lg m-0 p-0">{tab.name}</p>
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
