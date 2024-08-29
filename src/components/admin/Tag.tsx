interface TagProps {
  color: {
    background: string;
    text: string;
    hover?: string;
  };
  text: string;
  onClick?: () => void;
  classes: string;
  statuses?: { [key: string]: string };
}

const Tag: React.FC<TagProps> = ({
  color = { background: "", text: "" },
  text,
  onClick,
  classes,
  statuses = {},
}) => {
  return (
    <div
      data-cy={`${text}-tag`}
      className={`${classes} ${color.background} ${color.text} ${
        onClick && `hover:cursor-pointer ${color.hover}`
      } m-0 w-fit whitespace-nowrap rounded px-2 py-0.5 text-xs md:text-sm`}
      onClick={onClick}
    >
      {isNaN(Number(text)) ? text : statuses[text]}
    </div>
  );
};

export default Tag;
