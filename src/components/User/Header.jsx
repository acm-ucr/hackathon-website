import React from "react";
import Image from "next/image.js";

import { useSession } from "next-auth/react";

const Header = ({ horizontal = true }) => {
  const { data: session } = useSession();

  return (
    <div
      className={`flex ${
        horizontal ? "flex-row" : "flex-col"
      } items-center justify-center`}
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
        <p className="text-base">{session.user.email}</p>
      </div>
    </div>
  );
};
export default Header;
