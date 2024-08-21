import { STATUSES } from "@/data/Statuses";

type color = {
  background: string;
  text: string;
  hover: string;
};

const Tag = (props: {
  color: color;
  text: string;
  onClick?: () => void;
  classes?: string;
  statuses?: typeof STATUSES;
}) => {
  return (
    <div
      data-cy={`${props.text}-tag`}
      className={`${props.classes} ${props.color.background} ${props.color.text} ${
        props.onClick && `hover:cursor-pointer ${props.color.hover}`
      } m-0 w-fit whitespace-nowrap rounded px-2 py-0.5 text-xs md:text-sm`}
      onClick={props.onClick}
    >
      {isNaN(Number(props.text))
        ? props.text
        : props.statuses?.[props.text as keyof typeof STATUSES]}
    </div>
  );
};

export default Tag;
