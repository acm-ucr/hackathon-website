import Link from "next/link";
import { SiGithub } from "react-icons/si";
import Pages from "@/public/pages.png";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="flex flex-row items-center  justify-center w-full min-h-screen">
      <div className="w-5/12 ml-12">
        <div className="border-l-8 border-hackathon-blue-100 px-5 text-hackathon-green-300 text-3xl mb-3">
          <div className="text-6xl text-hackathon-blue-200 mb-4 font-bold">
            Hackathon Website
          </div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </div>
        <Link
          href="https://github.com/acm-ucr/hackathon-website"
          className="bg-hackathon-green-300 text-white p-4 rounded-xl flex w-fit items-center gap-3 duration-300 text-2xl"
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
