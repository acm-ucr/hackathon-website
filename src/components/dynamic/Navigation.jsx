"use client";

import { useState } from "react";
import LOGO from "../../../public/UCRLOGO.png";
import Image from "next/image";
import Link from "next/link";
import { TABS } from "@/data/dynamic/Navigation";
import { usePathname } from "next/navigation";
import { CONFIG } from "@/data/Config";
import { BiSolidDownArrow } from "react-icons/bi";

const Navigation = () => {
  const [expand, setExpand] = useState(false);
  const pathName = usePathname();
  const tabs = TABS[pathName.split("/")[1]];
  const [dropdown, setDropdown] = useState(Object.keys(tabs)[0]);

  return (
    <>
      <div className="flex lg:hidden w-full bg-hackathon-blue-200 h-12 items-center fixed z-20">
        <div
          className="flex items-center hover:cursor-pointer"
          onClick={() => setExpand(!expand)}
        >
          <Image
            src={LOGO}
            className="w-10 h-10 mx-2"
            alt={`${CONFIG.name} Logo`}
          />
          <div className="text-white text-xl font-semibold">
            {pathName.split("/")[2]}
          </div>
        </div>
      </div>
      <div
        className={`z-10 lg:flex lg:w-[12%] ${
          expand ? "left-0 h-screen w-1/2 fixed pt-5" : `hidden`
        }`}
      >
        <div className="bg-hackathon-blue-200 h-full flex flex-col justify-between items-center w-full">
          <div className="hidden lg:flex items-center my-3">
            <Image
              src={LOGO}
              className="w-10 h-10 mx-2"
              alt={`${CONFIG.name} Logo`}
            />
            <p className="text-white font-bold text-lg pr-2 m-0">
              {CONFIG.name.toUpperCase()}
            </p>
          </div>
          <div className="w-full flex flex-col items-center h-full">
            {Object.entries(tabs)
              .filter(([title]) => title !== " ")
              .map(([title, subTabs], index) => (
                <div key={index} className="w-full">
                  <p
                    className={`text-white text-xl font-poppin font-bold w-full px-2 mb-0 flex items-center justify-between hover:cursor-pointer ${subTabs.mt}`}
                    onClick={() => setDropdown(title === dropdown ? "" : title)}
                  >
                    {title}
                    {subTabs.expand && (
                      <BiSolidDownArrow
                        className={`text-sm duration-300 ${
                          dropdown === title && "rotate-180"
                        }`}
                      />
                    )}
                  </p>
                  {(dropdown === title || !subTabs.expand) &&
                    subTabs.tabs.map((tab, index) => (
                      <Link
                        key={index}
                        href={tab.link}
                        className="no-underline p-0 w-full"
                      >
                        <div
                          onClick={() => setExpand(false)}
                          className={`w-full flex [&>*]:text-white items-center justify-start py-1 pl-[10%] ${
                            pathName.endsWith(tab.link)
                              ? "bg-hackathon-blue-100"
                              : "[&>*]:hover:text-hackathon-blue-100"
                          }`}
                        >
                          {tab.icon}
                          <p className="text-lg m-0">{tab.name}</p>
                        </div>
                      </Link>
                    ))}
                </div>
              ))}
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
                  className={`w-full flex [&>*]:text-white items-center justify-start pl-[10%] py-1 ${
                    pathName.endsWith(tab.link)
                      ? "bg-hackathon-blue-100"
                      : "[&>*]:hover:text-hackathon-blue-100"
                  }`}
                >
                  {tab.icon}
                  <div className="text-lg">{tab.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
