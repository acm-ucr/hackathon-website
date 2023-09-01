const Tag = ({ color, text, onClick, classes }) => {
  console.log(color, text);
  return (
    <div
      className={`${classes} ${color.background} ${color.text} ${
        onClick && `hover:cursor-pointer ${color.hover}`
      } whitespace-nowrap px-2 py-0.5 rounded text-xs md:text-sm w-fit m-0`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default Tag;
