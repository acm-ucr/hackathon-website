import { TABS } from "@/data/engineering/Navigation";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="sticky top-0 flex items-center justify-end bg-hackathon-blue-200 h-20 w-screen text-2xl text-white">
      {TABS.map((tab, index) => {
        return (
          <Link
            key={index}
            href={tab.link}
            className="mx-6 hover:text-white/50 duration-300"
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
};

export default Navigation;
