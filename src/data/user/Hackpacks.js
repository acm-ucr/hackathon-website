import { RiJavascriptFill } from "react-icons/ri";
import { SiArduino, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { BiLogoCPlusPlus, BiLogoMongodb } from "react-icons/bi";

export const TECHSTACKS = {
  JavaScript: <RiJavascriptFill />,
  "Next.js": <SiNextdotjs />,
  firebase: <IoLogoFirebase />,
  tailwind: <SiTailwindcss />,
  MongoDB: <BiLogoMongodb />,
  Arduino: <SiArduino />,
  "C++": <BiLogoCPlusPlus />,
};
export const HACKPACKS = [
  {
    link: "https://github.com",
    text: "Full Stack Web App",
    techs: ["Javascript", "Next.js", "Firebase", "Tailwind"],
  },
  {
    link: "https://github.com",
    text: "Full Stack Web App",
    techs: ["Javascript", "Next.js", "MongoDB", "Tailwind"],
  },
  { link: "https://github.com", text: "Hardware", techs: ["Arduino", "C++"] },
];
