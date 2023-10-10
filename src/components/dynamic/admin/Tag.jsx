const Tag = ({ color, text, onClick, classes, statuses }) => {
  return (
    <div
      data-cy={`${text}-tag`}
      className={`${classes} ${color.background} ${color.text} ${
        onClick && `hover:cursor-pointer ${color.hover}`
      } whitespace-nowrap px-2 py-0.5 rounded text-xs md:text-sm w-fit m-0`}
      onClick={onClick}
    >
      {isNaN(text) ? text : statuses[text]}
    </div>
  );
};

export default Tag;
