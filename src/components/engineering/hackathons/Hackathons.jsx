import Image from "next/image";
import Link from "next/link";
import { HackathonsData } from "@/data/engineering/HackathonsData";

export const Hackathons = () => {
  return (
    <div className="text-center md:text-left">
      <title>Engineering | Hackathons at UCR</title>
      <div className="flex justify-center pb-4 pt-6 text-4xl font-bold text-hackathon-blue-200 md:my-10 md:text-5xl">
        Hackathons at UCR
      </div>
      {HackathonsData.map((data, index) => (
        <div
          key={index}
          className={`relative flex ${
            data.id % 2 === 0
              ? "flex-col bg-white md:flex-row"
              : "flex-col bg-hackathon-gray-100 md:flex-row-reverse"
          }`}
        >
          <div className="flex flex-col items-center justify-center gap-y-4 px-[5%] md:gap-y-8">
            <Image
              src={data.logo}
              objectFit="cover"
              alt={data.alt2}
              width={200}
              height={200}
              className="mt-4"
            />
            <div className="text-5xl font-bold text-hackathon-blue-100 md:text-6xl">
              {data.title}
            </div>
            <div className="text-xl md:text-2xl">{data.text}</div>
            <Link
              className="mb-4 w-fit rounded bg-hackathon-green-400 px-4 py-1 text-lg text-white"
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
      <div className="h-52 w-full bg-hackathon-blue-200" />
    </div>
  );
};

export default Hackathons;
