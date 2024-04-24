import { TECHSTACKS } from "@/data/user/Hackpacks";
import Link from "next/link";

const Hackpack = ({ text, techs, link }) => {
  return (
    <Link
      className="w-full bg-gray-100 rounded-xl p-4 hover:border-gray-300 border-gray-100 border-2 duration-300"
      href={link}
      target="_black"
    >
      <div className="font-bold">{text}</div>
      <div className="flex flex-wrap">
        {techs.map((tech, index) => (
          <div
            key={index}
            className="text-gray-400 rounded-full flex items-center px-1"
          >
            <div className="text-hackathon-blue-100 mr-1">
              {TECHSTACKS[tech]}
            </div>
            {tech}
          </div>
        ))}
      </div>
    </Link>
  );
};

export default Hackpack;
