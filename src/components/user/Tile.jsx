import Link from "next/link";

const Tile = ({ icon, text, link }) => {
  return (
    <Link
      href={link}
      className="bg-white w-full md:w-1/2 mb-3 md:my-0 rounded-xl p-7 gap-5 shadow-xl flex items-center hover:opacity-70"
      data-cy="tile-link"
    >
      <div className="text-black text-7xl" data-cy="tile-icon">
        {icon}
      </div>
      <div
        className="text-black font-bold text-2xl leading-9"
        data-cy="tile-text"
      >
        {text}
      </div>
    </Link>
  );
};

export default Tile;
