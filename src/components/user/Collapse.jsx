import { ChevronDown } from "lucide-react";
const Collapse = ({ text, children, setExpand, expand }) => {
  return (
    <div className="w-full rounded-xl bg-white p-4 drop-shadow-md">
      <div
        className="flex cursor-pointer items-center justify-between text-xl font-bold"
        onClick={() => setExpand(text === expand ? "" : text)}
      >
        {text}
        <ChevronDown
          className={`${text === expand && "rotate-180"} text-2xl duration-300`}
        />
      </div>
      <div
        className={`${
          text === expand ? "max-h-[1000px]" : "max-h-0"
        } overflow-hidden transition-[max-height] duration-500`}
        style={{
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapse;
