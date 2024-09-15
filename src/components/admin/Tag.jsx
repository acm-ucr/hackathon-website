import { Badge } from "../ui/badge";

const Tag = ({ color, text, onClick, classes, statuses }) => {
  return (
    <Badge
      data-cy={`${text}-tag`}
      className={`m-0 w-fit whitespace-nowrap rounded px-2 py-0.5 text-xs md:text-sm
        ${classes} ${color.background} ${color.text} ${
          onClick && `hover:cursor-pointer ${color.hover}`
        }`}
      onClick={onClick}
    >
      {isNaN(text) ? text : statuses[text]}
    </Badge>
  );
};

export default Tag;
