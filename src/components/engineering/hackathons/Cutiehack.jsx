import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/engineering/hackathon/cutielogo.webp";
import Cutie from "@/public/engineering/hackathon/cutie.webp";

const Cutiehack = () => {
  return (
    <div className="flex flex-row bg-hackathon-gray-100">
      <Image src={Cutie} alt="Photo of hackathon participants" />
      <div className="flex flex-col gap-y-8 justify-center px-[5%]">
        <Image src={Logo} alt="Cutie Hack Logo" />
        <div className="text-hackathon-blue-100 text-6xl font-bold">
          Cutiehack
        </div>
        <div className="text-2xl">
          Cutie Hack is a 12-hour, beginner-oriented hackathon hosted by
          students at University of California, Riverside where hackers are
          challenged to create a cool project within the time frame to demo in
          order to win awesome prizes and participate in workshops, fun games,
          and networking.
        </div>
        <Link
          className="w-fit rounded bg-hackathon-green-400 px-4 py-1 text-lg text-white"
          href="/"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default Cutiehack;
