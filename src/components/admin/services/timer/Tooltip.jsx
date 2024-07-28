const Tooltip = ({ children, text }) => {
  return (
    <div className="group relative z-50">
      {children}
      <div className="absolute bottom-0 left-0 origin-top translate-x-[-25%] translate-y-[125%] scale-0 rounded-md border-dotted border-black bg-black p-2 text-white opacity-0 duration-100 group-hover:scale-100 group-hover:opacity-100">
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
