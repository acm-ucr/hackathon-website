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
      <div className="min-h-72 rounded-lg bg-white p-3">
        <p className="text-lg font-semibold">{text}</p>
        <div className="my-2 flex flex-col">
          {techs.map((tech, index) => (
            <div
              key={index}
              className="my-1 flex items-center rounded-full px-1 text-gray-400"
            >
              <div className="mr-2 text-hackathon-blue-100">
                {TECHSTACKS[tech]}
              </div>
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* <div className="col-span-1 bg-white p-3 rounded-lg">
        <p className="text-lg font-semibold">{text}</p>
        <div className="inline-block gap-3 my-2">
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
      </div> */}
      {/* <div className="font-bold">{text}</div>
      <div className="flex flex-wrap">
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
      </div> */}
    </Link>
  );
};

export default Hackpack;
