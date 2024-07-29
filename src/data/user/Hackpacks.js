import { RiJavascriptFill } from "react-icons/ri";
import { SiArduino, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { BiLogoCPlusPlus, BiLogoMongodb } from "react-icons/bi";

export const TECHSTACKS = {
  Javascript: <RiJavascriptFill />,
  "Next.js": <SiNextdotjs />,
  Firebase: <IoLogoFirebase />,
  Tailwind: <SiTailwindcss />,
  MongoDB: <BiLogoMongodb />,
  Arduino: <SiArduino />,
  "C++": <BiLogoCPlusPlus />,
};
export const HACKPACKS = [
  {
    link: "https://github.com/acm-ucr/firebase-nextjs-hackpack",
    text: "Full Stack Web App",
    techs: ["Javascript", "Next.js", "Firebase", "Tailwind"],
  },
  {
    link: "https://github.com/acm-ucr/nextjs-hackpack",
    text: "Full Stack Web App",
    techs: ["Javascript", "Next.js", "Tailwind"],
  },
  {
    link: "https://github.com/acm-ucr/arduino-hackpack",
    text: "Hardware",
    techs: ["Arduino", "C++"],
  },
  {
    link: "https://github.com/acm-ucr/unity-hackpack",
    text: "Game Development",
    techs: ["Unity, C#"],
  },
  {
    link: "https://github.com/acm-ucr/discord_python_hackpack",
    text: "Discord Bot",
    techs: ["Python"],
  },
  {
    link: "https://github.com/acm-ucr/discord_python_hackpack",
    text: "Python Application",
    techs: ["Python"],
  },
];
