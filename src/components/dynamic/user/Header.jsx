import Image from "next/image.js";
import { useSession } from "next-auth/react";
import Tag from "../admin/Tag";
import { COLORS } from "@/data/dynamic/Tags";

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
    <div
      className={`flex ${
        horizontal ? "flex-row" : "flex-col"
      } items-center justify-center w-fit`}
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
  );
};
export default Header;
