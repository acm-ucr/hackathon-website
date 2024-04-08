import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/engineering/hackathon/cutielogo.png";
import Cutie from "@/public/engineering/hackathon/cutie.png";

const Cutiehack = () => {
  return (
    <div className="flex flex-row bg-hackathon-gray-100">
      <Image src={Cutie} />
      <div className="flex flex-col gap-y-5 w-1/2 p-5">
        <Image src={Logo} />
        <div className="text-hackathon-blue-100 text-6xl font-bold">
          Cutiehack
        </div>
        <div>
          Cutie Hack is a 12-hour, beginner-oriented hackathon hosted by
          students at University of California, Riverside where hackers are
          challenged to create a cool project within the time frame to demo in
          order to win awesome prizes and participate in workshops, fun games,
          and networking.
        </div>
        <Link
          className="w-fit rounded bg-hackathon-green-300 px-4 py-2 text-white"
          href="www.roblox.com"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default Cutiehack;
