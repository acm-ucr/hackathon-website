"use client";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="font-medium">Welcome</p>
        <p className="mb-0 text-2xl font-bold">{session?.user?.name}</p>
      </div>
      <div className="mr-6">
        <button
          onClick={() => signOut({ callbackUrl: "/", redirect: true })}
          className="rounded-lg bg-hackathon-tags-red-text px-4 py-1 font-bold text-white opacity-100 transition-opacity hover:opacity-50"
        >
          logout
        </button>
      </div>
    </div>
  );
};
export default Header;
