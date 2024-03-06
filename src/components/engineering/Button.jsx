import Link from "next/link";
import { COLORS, SIZES, ICONS } from "@/data/engineering/Button";
const Button = ({ text, link, color, size }) => {
  return (
    <Link
      href={link}
      className={`${COLORS[color].bg} ${COLORS[color].text} ${SIZES[size]} text-3xl py-3 rounded-xl flex w-3/12 items-center justify-evenly duration-300`}
    >
      {ICONS[text]}
      {text}
    </Link>
  );
};

export default Button;
