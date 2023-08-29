import { colors } from "@/data/TagColors";

const Tag = ({ color, text, onClick = null, classes }) => {
  return (
    <div
      className={`${classes} ${colors[color].background} ${
        colors[color].text
      } ${
        onClick && `hover:cursor-pointer ${colors[color].hover}`
      } whitespace-nowrap px-2 py-0.5 rounded-md text-xs md:text-sm w-fit m-0`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default Tag;
