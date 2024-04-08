import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/engineering/hackathon/citruslogo.webp";
import Citrus from "@/public/engineering/hackathon/citrus.webp";

const Citrushack = () => {
  return (
    <div className="flex flex-row bg-hackathon-gray-100">
      <Image src={Citrus} alt="Photo of hackathon participants" />
      <div className="flex flex-col gap-y-8 justify-center px-[5%]">
        <Image src={Logo} alt="Citrus Hack Logo" />
        <div className="text-hackathon-blue-100 text-6xl font-bold">
          Citrushack
        </div>
        <div className="text-2xl">
          Citrus Hack is a 36-hour hackathon hosted by the University of
          California, Riverside. Hackers are challenged to create a project on
          the spot and demo it to compete for prizes. Our goal is to provide
          learning and networking opportunities for our community of hackers.
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

export default Citrushack;
