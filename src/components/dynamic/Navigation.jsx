"use client";

import { useState } from "react";
import LOGO from "../../../public/UCRLOGO.png";
import Image from "next/image";
import Link from "next/link";
import { ADMIN, USER } from "@/data/dynamic/Navigation";
import { usePathname } from "next/navigation";
import { CONFIG } from "@/data/Config";

const Navigation = () => {
  const [expand, setExpand] = useState(false);
  const pathName = usePathname();
  const tabs = pathName.startsWith("/admins")
    ? ADMIN
    : pathName.startsWith("/users")
    ? USER
    : null;

  return (
    tabs && (
      <>
        <div className="flex lg:hidden w-full bg-hackathon-blue-200 h-12 items-center fixed z-50">
          <div
            className="flex items-center hover:cursor-pointer"
            onClick={() => {
              setExpand(!expand);
            }}
          >
            <Image
              src={LOGO}
              className="w-10 h-10 mx-2"
              alt={`${CONFIG.name} Logo`}
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
          <div className="bg-hackathon-blue-200 h-screen flex flex-col justify-between items-center w-full">
            <div className="hidden lg:flex items-center my-3">
              <Image
                src={LOGO}
                className=" scale-90"
                alt={`${CONFIG.name} Logo`}
              />
              <p className="text-white font-bold text-lg pr-2 m-0">
                {CONFIG.name.toUpperCase()}
              </p>
            </div>
            <div className="w-full flex flex-col items-center h-full p-0">
              {Object.entries(tabs).map(
                ([title, subTabs], index) =>
                  title !== " " && (
                    <div key={index} className="w-full">
                      <p
                        className={`text-white text-xl font-poppin font-bold w-full pl-2 mb-0 ${subTabs.mt}`}
                      >
                        {title}
                      </p>
                      {subTabs.tabs.map((tab, index) => (
                        <Link
                          key={index}
                          href={tab.link}
                          className="no-underline p-0 w-full"
                        >
                          <div
                            onClick={() => setExpand(false)}
                            className={`w-full flex [&>*]:text-white items-center justify-start py-1 m-0 pl-[10%] ${
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
                  )
              )}
            </div>
            <div className="w-full flex flex-col items-center mb-3">
              {tabs[" "].map((tab, index) => (
                <Link
                  key={index}
                  href={tab.link}
                  onClick={() => tab.onClick()}
                  className="no-underline w-full"
                >
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
