"use client";
import { TABS } from "@/data/engineering/Navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Logo from "@/app/favicon.ico";

const Navigation = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="fixed top-0 z-10 w-screen text-2xl text-white">
      <div className="flex items-center justify-between bg-hackathon-blue-200 w-full  py-4 px-4">
        <div className="flex gap-2">
          <Image src={Logo} className="w-8" alt="Logo" />
          <Link href="/engineering">Hackathon Engineering</Link>
        </div>
        <div className="hidden md:flex">
          {TABS.map((tab, index) => (
            <Link
              key={index}
              href={tab.link}
              className="mx-6 hover:text-white/50 duration-300"
            >
              {tab.label}
            </Link>
          ))}
        </div>
        <GiHamburgerMenu
          className="cursor-pointer flex md:hidden"
          onClick={() => setShow(!show)}
        />
      </div>

      <div className="flex flex-col md:hidden">
        {TABS.map((tab, index) => (
          <Link
            key={index}
            href={tab.link}
            className={
              show
                ? "active:text-white/50 text-center flex justify-center w-full bg-hackathon-blue-200 py-2"
                : "hidden"
            }
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
