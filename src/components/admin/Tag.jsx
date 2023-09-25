import { PAST } from "../../data/Tags.js";

const Tag = ({ color, text, onClick, classes, past = false }) => {
  return (
    <div
      data-cy={`${text}-tag`}
      className={`${classes} ${color.background} ${color.text} ${
        onClick && `hover:cursor-pointer ${color.hover}`
      } whitespace-nowrap px-2 py-0.5 rounded text-xs md:text-sm w-fit m-0`}
      onClick={onClick}
    >
      {past && PAST[text] ? PAST[text] : text}
    </div>
  );
};

export default Tag;
