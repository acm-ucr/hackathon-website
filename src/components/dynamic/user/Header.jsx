import Image from "next/image.js";
import { useSession } from "next-auth/react";
import Tag from "../admin/Tag";
import { COLORS } from "@/data/dynamic/Tags";
import { signOut } from "next-auth/react";

const Header = ({ horizontal = true }) => {
  const { data: session } = useSession();

  const color =
    session.user.roles.participants === 1
      ? "green"
      : session.user.roles.participants === -1
      ? "red"
      : "yellow";

  const text =
    session.user.roles.participants === 1
      ? "accepted"
      : session.user.roles.participants === -1
      ? "rejected"
      : "pending";

  return (
    <div className="grid grid-cols-2 items-center">
      <div
        className={`flex ${
          horizontal ? "flex-row" : "flex-col"
        } items-center justify-center}`}
      >
        <Image
          src={session.user.image}
          width={125}
          height={125}
          alt="Picture of user's profile"
          className="mr-4 rounded-full overflow-hidden"
        />
        <div className="align-left">
          <p className="text-2xl font-bold mb-0">{session.user.name}</p>
          <p className="text-base mb-1">{session.user.email}</p>
          <Tag color={COLORS[color]} text={text} />
        </div>
      </div>
      <div className="flex justify-end mr-6">
        <button
          onClick={() => signOut({ callbackUrl: "/", redirect: true })}
          className="bg-hackathon-tags-red-text text-white py-1 px-4 rounded-lg font-bold"
        >
          logout
        </button>
      </div>
    </div>
  );
};
export default Header;
