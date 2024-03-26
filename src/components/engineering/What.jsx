import Link from "next/link";
import Vertical from "@/public/vertical.webp";
import Image from "next/image";

const What = () => {
  return (
    <div className="flex flex-row items-center justify-evenly text-white w-full  bg-hackathon-blue-100">
      <Image src={Vertical} alt="Web Pages" />

      <div className="w-1/3">
        <div className="text-4xl font-bold">What is Hackathon Website?</div>
        <div className="text-xl my-5">
          Hackathon Website serves as a template for all five of UC
          Riverside&apos;s hackathon events. The purpose of this website is to
          simplify the hackathon management process for all participants and
          organizers.
        </div>
        <Link
          href="https://github.com/acm-ucr/hackathon-website"
          className="bg-white text-hackathon-blue-100 p-4 rounded-xl flex w-fit items-center duration-300 text-2xl"
        >
          HOW IT WORKS
        </Link>
      </div>
    </div>
  );
};

export default What;
