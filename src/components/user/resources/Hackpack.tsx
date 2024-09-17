import { TECHSTACKS } from "@/data/user/Hackpacks";
import Link from "next/link";
import { SiGithub as Github } from "@icons-pack/react-simple-icons";

type props = {
  text: string;
  techs: string[];
  link: string;
  description: string;
};

const Hackpack = ({ text, techs, link, description }: props) => {
  return (
    <Link
      data-cy="hackpack-link"
      className="items-center justify-between rounded-xl bg-white p-3 opacity-100 hover:opacity-70"
      href={link}
      target="_black"
    >
      <div
        className="flex items-center justify-between text-lg font-semibold"
        data-cy="hackpack-text"
      >
        {text}
        <div>
          <Github size={20} />
        </div>
      </div>
      <div className="my-2 flex flex-wrap gap-2" data-cy="hackpack-techs">
        {techs.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-gray-400"
            data-cy="hackpack-tech"
          >
            <div className="text-hackathon-blue-100" data-cy="hackpack-icon">
              {TECHSTACKS[tech]}
            </div>
            {tech}
          </div>
        ))}
      </div>
      <p className="mt-2">{description}</p>
    </Link>
  );
};

export default Hackpack;
