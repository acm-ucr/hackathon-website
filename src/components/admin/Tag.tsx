import { StatusMapping } from "@/data/Statuses";

type color = {
  background: string;
  text: string;
  hover: string;
};

type props = {
  color: color;
  text: string;
  onClick?: () => void;
  classes?: string;
  statuses?: StatusMapping;
};

const Tag = ({ color, text, onClick, classes, statuses }: props) => {
  return (
    <div
      data-cy={`${text}-tag`}
      className={`${classes} ${color.background} ${color.text} ${
        onClick && `hover:cursor-pointer ${color.hover}`
      } m-0 w-fit whitespace-nowrap rounded px-2 py-0.5 text-xs md:text-sm`}
      onClick={onClick}
    >
      {isNaN(Number(text))
        ? text
        : statuses?.[text as keyof StatusMapping]}
    </div>
  );
};

export default Tag;
