import { TECHSTACKS } from "@/data/user/Hackpacks";
import Link from "next/link";

const Hackpack = ({ text, techs, link }) => {
  return (
    <Link
      data-cy="hackpack-link"
      className="w-full rounded-xl border-2 border-gray-100 bg-gray-100 p-4 duration-300 hover:border-gray-300"
      href={link}
      target="_black"
    >
      <div data-cy="hackpack-text" className="font-bold">
        {text}
      </div>
      <div data-cy="hackpack-techs" className="flex flex-wrap">
        {techs.map((tech, index) => (
          <div
            data-cy="hackpack-tech"
            key={index}
            className="flex items-center rounded-full px-1 text-gray-400"
          >
            <div
              data-cy="hackpack-icon"
              className="mr-1 text-hackathon-blue-100"
            >
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
