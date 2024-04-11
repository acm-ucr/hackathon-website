import Image from "next/image";
import Link from "next/link";
import { HackathonsData } from "@/data/engineering/HackathonsData";

const Hacks = () => {
  return !(id % 2 === 0) ? (
    <div className="flex flex-row bg-hackathon-gray-100 py-10">
      <Image src={img} alt={HackathonsData.BearHack.alt1} />
      <div className="flex flex-col gap-y-8 justify-center px-[5%]">
        <Image src={logo} alt={HackathonsData.BearHack.alt2} />
        <div className="text-hackathon-blue-100 text-6xl font-bold">
          {HackathonsData.BearHack.title}
        </div>
        <div className="text-2xl">{text}</div>
        <Link
          className="w-fit rounded bg-hackathon-green-400 px-4 py-1 text-lg text-white"
          href="/"
        >
          Details
        </Link>
      </div>
    </div>
  ) : (
    <div className="flex">
      <div className="flex flex-col gap-y-8 justify-center px-[5%] py-10">
        <Image src={logo} alt={alt2} />
        <div className="text-hackathon-blue-100 text-6xl font-bold">
          {title}
        </div>
        <div className="text-2xl">{text}</div>
        <Link
          className="w-fit rounded bg-hackathon-green-400 px-4 py-1 text-lg text-white"
          href="/"
        >
          Details
        </Link>
      </div>
      <Image src={img} alt={alt1} />
    </div>
  );
};

export default Hacks;
