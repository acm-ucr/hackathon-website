import React from "react";
const colors = {
  green: {
    bg: "bg-hackathon-green-300",
    text: "text-white",
  },
};
const sizes = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};
const Button = ({ color, text, onClick, size }) => {
  return (
    <button
      className={`${colors[color].bg} ${colors[color].text} ${sizes[size]} py-1 hover:opacity-50 font-bold rounded-lg px-4`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
