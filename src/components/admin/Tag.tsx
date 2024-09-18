import { StatusMapping } from "@/data/Statuses";
import { Badge } from "../ui/badge";

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
    <Badge
      data-cy={`${text}-tag`}
      className={`m-0 w-fit whitespace-nowrap rounded px-2 py-0.5 text-xs md:text-sm ${classes} ${color.background} ${color.text} ${
        onClick && `hover:cursor-pointer ${color.hover}`
      }`}
      onClick={onClick}
    >
      {isNaN(Number(text)) ? text : statuses?.[text as keyof StatusMapping]}
    </Badge>
  );
};

export default Tag;
