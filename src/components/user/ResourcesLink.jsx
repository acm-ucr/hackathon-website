import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Link from "next/link";

const ResourcesLink = () => {
  return (
    <Link href="/user/resources">
      <div className="hover:translate-x-[2%] hover:translate-y-[-5%] transition-transform ease-in-out duration-300 w-full bg-white rounded-xl p-4 drop-shadow-md">
        <div className="flex items-center justify-between cursor-pointer text-xl font-bold">
          <p>Resources</p>
          <FaArrowUpRightFromSquare />
        </div>
      </div>
    </Link>
  );
};

export default ResourcesLink;
