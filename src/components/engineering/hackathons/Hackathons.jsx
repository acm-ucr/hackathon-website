import Image from "next/image";
import Link from "next/link";
import { HackathonsData } from "@/data/engineering/HackathonsData";

export const Hackathons = () => {
  const sectionText = (data) => {
    return (
      <div className="flex flex-col gap-y-8 justify-center px-[5%]">
        <div className="w-[100px] h-[100px] relative">
          <Image
            src={data.logo}
            layout="fill"
            objectFit="cover"
            alt={data.alt2}
          />
        </div>
        <div className="text-hackathon-blue-100 text-6xl font-bold">
          {data.title}
        </div>
        <div className="text-2xl">{data.text}</div>
        <Link
          className="w-fit rounded bg-hackathon-green-400 px-4 py-1 text-lg text-white"
          href="/"
        >
          Details
        </Link>
      </div>
    );
  };
  const sectionImg = (data) => {
    return (
      <div className="relative w-2/5">
        <Image
          src={data.image}
          layout="fill"
          objectFit="cover"
          alt={data.alt1}
        />
      </div>
    );
  };

  return (
    <>
      <div className="flex font-bold justify-center text-hackathon-blue-200 text-5xl my-10">
        Hackathons at UCR
      </div>
      {Object.values(HackathonsData).map((data, index) => (
        <div
          key={index}
          className={`flex flex-row py-10 relative ${
            data.id % 2 === 0 ? "bg-white" : "bg-hackathon-gray-100"
          }`}
        >
          {data.id % 2 === 0 ? sectionText(data) : sectionImg(data)}
          {!(data.id % 2 === 0) ? sectionText(data) : sectionImg(data)}
        </div>
      ))}
      <div className="w-full h-52 bg-hackathon-blue-200" />
    </>
  );
};

export default Hackathons;
