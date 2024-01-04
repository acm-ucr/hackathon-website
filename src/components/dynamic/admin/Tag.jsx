const Tag = ({ color, text, onClick, classes, statuses }) => {
  console.log(text);

  return (
    <div
      data-cy={`${text}-tag`}
      className={`${classes} ${color.background} ${color.text} ${
        onClick && `hover:cursor-pointer ${color.hover}`
      } whitespace-nowrap px-2 py-0.5 rounded text-xs md:text-sm w-fit m-0`}
      onClick={onClick}
    >
      {isNaN(text) ? text.toLowerCase() : statuses[text]}
    </div>
  );
};

export default Tag;
