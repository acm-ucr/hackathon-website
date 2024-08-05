import { Link as LinkLucide } from "lucide-react";
import Link from "next/link";

const Resources = () => {
  return (
    <Link href="/user/resources">
      <div className="w-full rounded-xl bg-white p-4 shadow-xl">
        <div className="flex cursor-pointer items-center justify-between text-xl font-bold">
          <p>Resources</p>
          <LinkLucide />
        </div>
      </div>
    </Link>
  );
};

export default Resources;
