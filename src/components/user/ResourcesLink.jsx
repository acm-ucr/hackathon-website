import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Link from "next/link";

const ResourcesLink = () => {
  return (
    <Link href="/user/resources">
      <div className="w-full rounded-xl bg-white p-4 drop-shadow-md transition-transform duration-300 ease-in-out hover:translate-x-[2%] hover:translate-y-[-5%]">
        <div className="flex cursor-pointer items-center justify-between text-xl font-bold">
          <p>Resources</p>
          <FaArrowUpRightFromSquare />
        </div>
      </div>
    </Link>
  );
};

export default ResourcesLink;
