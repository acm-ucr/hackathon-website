import {
  SiJavascript as Javascript,
  SiArduino as Arduino,
  SiNextdotjs as Nextjs,
  SiTailwindcss as Tailwind,
  SiFirebase as Firebase,
  SiCplusplus as CPlusPlus,
  SiMongodb as Mongodb,
} from "@icons-pack/react-simple-icons";

interface TechStackItem {
  key: string;
  component: React.ComponentType;
}

export const TECHSTACKS: TechStackItem[] = [
  { key: "Javascript", component: Javascript },
  { key: "Next.js", component: Nextjs },
  { key: "Firebase", component: Firebase },
  { key: "Tailwind", component: Tailwind },
  { key: "MongoDB", component: Mongodb },
  { key: "Arduino", component: Arduino },
  { key: "C++", component: CPlusPlus },
];

interface packs {
  link: string;
  text: string;
  techs: string[];
  description: string;
}

export const HACKPACKS: packs[] = [
  {
    link: "https://github.com/acm-ucr/firebase-nextjs-hackpack",
    text: "Full Stack Web App",
    techs: ["Javascript", "Next.js", "Firebase", "Tailwind"],
    description: "A Firebase + Next.js Starter Pack",
  },
  {
    link: "https://github.com/acm-ucr/nextjs-hackpack",
    text: "Full Stack Web App",
    techs: ["Javascript", "Next.js", "Tailwind"],
    description: "A Firebase + Next.js Starter Pack",
  },
  {
    link: "https://github.com/acm-ucr/arduino-hackpack",
    text: "Hardware",
    techs: ["Arduino", "C++"],
    description: "A Firebase + Next.js Starter Pack",
  },
  {
    link: "https://github.com/acm-ucr/unity-hackpack",
    text: "Game Development",
    techs: ["Unity, C#"],
    description: "A Firebase + Next.js Starter Pack",
  },
  {
    link: "https://github.com/acm-ucr/discord_python_hackpack",
    text: "Discord Bot",
    techs: ["Python"],
    description: "A Firebase + Next.js Starter Pack",
  },
  {
    link: "https://github.com/acm-ucr/discord_python_hackpack",
    text: "Python Application",
    techs: ["Python"],
    description: "A Firebase + Next.js Starter Pack",
  },
];
