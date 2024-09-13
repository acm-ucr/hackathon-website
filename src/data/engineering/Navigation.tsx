import { SiGithub as Github } from "@icons-pack/react-simple-icons";
import React from "react";

type tab = {
  label: string | React.ReactElement;
  link: string;
};

export const TABS: tab[] = [
  {
    label: "hackathons",
    link: "/engineering/hackathons",
  },
  {
    label: "blogs",
    link: "/engineering/blog",
  },
  {
    label: <Github className="self-center text-4xl" />,
    link: "https://github.com/acm-ucr/hackathon-website",
  },
];
