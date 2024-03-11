import Link from "next/link";
import Vertical from "@/public/vertical.png";
import Image from "next/image";

const What = () => {
  return (
    <div className="flex flex-row items-center justify-evenly text-white w-full  bg-hackathon-blue-100">
      <Image src={Vertical} alt="Web Pages" />

      <div className="w-1/3">
        <div className="text-4xl font-bold">What is Hackathon Website?</div>
        <div className="text-xl my-5">
          Lorem ipsum dolorsit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </div>
        <Link
          href="www.roblox.com"
          className="bg-white text-hackathon-blue-100 p-4 rounded-xl flex w-fit items-center duration-300 text-2xl"
        >
          HOW IT WORKS
        </Link>
      </div>
    </div>
  );
};

export default What;
