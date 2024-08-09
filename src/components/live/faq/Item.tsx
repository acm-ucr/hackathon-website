"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

type props = {
  title: string;
  children: React.ReactNode;
};

const Item = ({ title, children }: props) => {
  const [state, setState] = useState(false);
  return (
    <div>
      <button
        onClick={() => setState(!state)}
        className="flex w-full items-center justify-between whitespace-nowrap py-3 text-lg"
      >
        {title}
        <ChevronDown className={`${state && "rotate-180"} duration-500`} />
      </button>
      <div
        className={`transition-opacity duration-500 ease-in-out ${
          state ? "opacity-100" : "opacity-0"
        }`}
      >
        {state && <div className="text-base text-black">{children}</div>}
      </div>
    </div>
  );
};

export default Item;
