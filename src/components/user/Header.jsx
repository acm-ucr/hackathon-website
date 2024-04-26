import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  return (
    <div className="grid grid-cols-2 items-center">
      <div>
        <p className="font-medium">Welcome</p>
        <p className="text-2xl font-bold mb-0">{session.user.name}</p>
      </div>
      <div className="flex justify-end mr-6">
        <button
          onClick={() => signOut({ callbackUrl: "/", redirect: true })}
          className="bg-hackathon-tags-red-text text-white py-1 px-4 rounded-lg font-bold opacity-100 hover:opacity-50 transition-opacity"
        >
          logout
        </button>
      </div>
    </div>
  );
};
export default Header;
