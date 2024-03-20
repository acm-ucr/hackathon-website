import { TABS } from "@/data/engineering/Navigation";
import { SiGithub } from "react-icons/si";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-end bg-hackathon-blue-200 h-20 w-screen text-2xl text-white">
      {TABS.map((tab, index) => (
        <Link
          key={index}
          href={tab.link}
          className="mx-6 hover:text-white/50 duration-300"
        >
          {tab.label}
        </Link>
      ))}
      <Link
        href="https://github.com/acm-ucr/hackathon-website"
        className="mx-6 hover:text-white/50 duration-300 text-3xl"
      >
        <SiGithub />
      </Link>
    </div>
  );
};

export default Navigation;
