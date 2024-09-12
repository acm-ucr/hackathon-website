import { Badge } from "../ui/badge";

const Tag = ({ color, text, onClick, classes, statuses }) => {
  return (
    <Badge
      data-cy={`${text}-tag`}
      className={`${classes} ${color.background} ${color.text} ${
        onClick && `hover:cursor-pointer ${color.hover}`
      } m-0 w-fit whitespace-nowrap rounded px-2 py-0.5 text-xs md:text-sm`}
      onClick={onClick}
    >
      {isNaN(text) ? text : statuses[text]}
    </Badge>
  );
};

export default Tag;
