import { TECHSTACKS } from "@/data/user/Hackpacks";
import Link from "next/link";
import { SiGithub as Github } from "@icons-pack/react-simple-icons";

type props = {
  text: string;
  techs: string[];
  link: string;
  description: string;
};

// Function to get the icon component based on the technology name
const getIconComponent = (tech: string) => {
  const techStackItem = TECHSTACKS.find((item) => item.key === tech);
  return techStackItem ? techStackItem.component : null;
};

const Hackpack = ({ text, techs, link, description }: props) => {
  return (
    <div className="rounded-xl bg-white p-3">
      <Link
        data-cy="hackpack-link"
        className="flex items-center justify-between opacity-100 hover:opacity-70"
        href={link}
        target="_black"
      >
        <p className="text-lg font-semibold" data-cy="hackpack-text">
          {text}
        </p>
        <Github size={20} />
      </Link>

      <div className="my-2 flex flex-wrap gap-2" data-cy="hackpack-techs">
        {techs.map((tech, index) => {
          const IconComponent = getIconComponent(tech);
          return (
            <div
              key={index}
              className="flex items-center gap-2 text-gray-400"
              data-cy="hackpack-tech"
            >
              <div className="text-hackathon-blue-100" data-cy="hackpack-icon">
                {IconComponent ? <IconComponent /> : null}{" "}
                {/* Render the icon component */}
              </div>
              {tech}
            </div>
          );
        })}

        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Hackpack;
