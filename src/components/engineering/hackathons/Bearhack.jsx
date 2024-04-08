import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/engineering/hackathon/bearlogo.png";
import Bear from "@/public/engineering/hackathon/bear.png";

const Bearhack = () => {
  return (
    <div className="flex flex-row bg-hackathon-gray-100">
      <Image src={Bear} alt="Photo of hackathon participants" />
      <div className="flex flex-col gap-y-8 justify-center px-[5%]">
        <Image src={Logo} alt="Bear Hack Logo" />
        <div className="text-hackathon-blue-100 text-6xl font-bold">
          Bearhack
        </div>
        <div className="text-2xl">
          Founded by the Biomedical Engineering Society (BMES), Bearhack is a
          medical-centric hackathon event hosted at University of California,
          Riverside. Our goal is to provide an opprotunity for hackers to build
          new projects and expand their networks.
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

export default Bearhack;
