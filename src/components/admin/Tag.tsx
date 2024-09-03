export type TagProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  color: {
    background: string;
    text: string;
    hover: string;
  };
  text: string | number;
  onClick?: () => void;
  className?: string;
  statuses?: { [key: string | number]: string };
};
export const Tag: React.FC<TagProps> = ({
  color,
  text,
  onClick,
  className,
  statuses = {},
}) => {
  return (
    <div
      data-cy={`${text}-tag`}
      className={`${className} ${color.background} ${color.text} ${
        onClick && `hover:cursor-pointer ${color.hover}`
      } m-0 w-fit whitespace-nowrap rounded px-2 py-0.5 text-xs md:text-sm`}
      onClick={onClick}
    >
      {isNaN(Number(text)) ? text : statuses[text]}
    </div>
  );
};
