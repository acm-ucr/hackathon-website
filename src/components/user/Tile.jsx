import Link from "next/link";

const Tile = ({ icon, text, link }) => {
  return (
    <Link
      href={link}
      className="bg-white w-1/2 rounded-xl p-7 gap-5 shadow-xl flex items-center"
    >
      <div className="text-black text-7xl">{icon}</div>
      <div className="text-black font-bold text-2xl leading-9">{text}</div>
    </Link>
  );
};

export default Tile;
