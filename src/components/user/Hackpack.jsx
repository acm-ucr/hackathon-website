import { TECHSTACKS } from "@/data/user/Hackpacks";
import Link from "next/link";

const Hackpack = ({ text, techs, link }) => {
  return (
    <Link
      data-cy="hackpack-link"
      className="w-full bg-gray-100 rounded-xl p-4 hover:border-gray-300 border-gray-100 border-2 duration-300"
      href={link}
      target="_black"
    >
      <div className="bg-white p-3 rounded-lg min-h-72">
      <p className="text-lg font-semibold">{text}</p>
      <div className="flex flex-col my-2">
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
            className="text-gray-400 rounded-full flex items-center px-1"
          >
            <div
              data-cy="hackpack-icon"
              className="text-hackathon-blue-100 mr-1"
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
