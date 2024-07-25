const Tooltip = ({ children, text }) => {
  return (
    <div className="relative group">
      {children}
      <div className="absolute group-hover:opacity-100 opacity-0 group-hover:scale-100 scale-0 duration-100 origin-top translate-x-[-25%] translate-y-[125%]  border-dotted border-black  bg-black text-white p-2 rounded-md bottom-0 left-0">
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
