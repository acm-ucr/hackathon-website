import Link from "next/link";
import { SiGithub } from "react-icons/si";
import Pages from "@/public/engineering/pages.webp";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="flex flex-row items-center  justify-center w-full min-h-screen">
      <div className="w-5/12 ml-12">
        <div className="border-l-8 border-hackathon-blue-100 px-5 text-hackathon-green-300 mb-3">
          <div className="text-5xl text-hackathon-blue-200 mb-4 font-bold">
            Hackathon Website
          </div>
          <p className="text-xl">
            A template website simplifying the management process for UC
            Riverside&apos; hackathon events.
          </p>
        </div>
        <Link
          href="https://github.com/acm-ucr/hackathon-website"
          className="text-black rounded-xl flex items-center gap-3 text-2xl hover:opacity-50 my-4 hover:cursor-pointer"
        >
          <SiGithub className="text-3xl" />
          GitHub
        </Link>
      </div>
      <Image
        src={Pages}
        alt="Hackathon Web Pages"
        className="drop-shadow-lg"
        width={750}
        height={750}
      />
    </div>
  );
};

export default Landing;
