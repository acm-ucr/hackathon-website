import Image from "next/image";
import Link from "next/link";
import { HackathonsData } from "@/data/engineering/HackathonsData";

export const Hackathons = () => {
  return (
    <div className="text-center md:text-left">
      <div className="flex font-bold justify-center text-hackathon-blue-200 text-4xl md:text-5xl md:my-10 pt-6 pb-4">
        Hackathons at UCR
      </div>
      {HackathonsData.map((data, index) => (
        <div
          key={index}
          className={`flex relative ${
            data.id % 2 === 0
              ? "bg-white flex-col md:flex-row "
              : "bg-hackathon-gray-100 flex-col md:flex-row-reverse"
          }`}
        >
          <div className="flex flex-col items-center gap-y-4 md:gap-y-8 justify-center px-[5%]">
            <Image
              src={data.logo}
              objectFit="cover"
              alt={data.alt2}
              width={200}
              height={200}
              className="mt-4"
            />
            <div className="text-hackathon-blue-100 text-5xl md:text-6xl font-bold">
              {data.title}
            </div>
            <div className="text-xl md:text-2xl">{data.text}</div>
            <Link
              className="w-fit rounded bg-hackathon-green-400 px-4 py-1 text-lg text-white mb-4"
              href="/"
            >
              Details
            </Link>
          </div>
          <Image
            src={data.image}
            objectFit="cover"
            alt={data.alt1}
            width={600}
            height={600}
          />
        </div>
      ))}
      <div className="w-full h-52 bg-hackathon-blue-200" />
    </div>
  );
};

export default Hackathons;
