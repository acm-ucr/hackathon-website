"use client";
import { TABS } from "@/data/engineering/Navigation";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Logo from "@/app/favicon.ico";

const Navigation = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="fixed top-0 z-10 w-screen text-2xl text-white">
      <div className="flex w-full items-center justify-between bg-hackathon-blue-200 px-4 py-4">
        <div className="flex gap-2">
          <Image src={Logo} className="w-8" alt="Logo" />
          <Link href="/engineering">Hackathon Engineering</Link>
        </div>
        <div className="hidden md:flex">
          {TABS.map((tab, index) => (
            <Link
              key={index}
              href={tab.link}
              className="mx-6 duration-300 hover:text-white/50"
            >
              {tab.label}
            </Link>
          ))}
        </div>
        <Menu
          className="flex cursor-pointer md:hidden"
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
                ? "flex w-full justify-center bg-hackathon-blue-200 py-2 text-center active:text-white/50"
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
