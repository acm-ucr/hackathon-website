import { useState } from "react";

const Button = ({ onClick, text }) => {
  const [displayText, setText] = useState(text);
  return (
    <button
      data-cy={`${text}-button`}
      className="text-gray-800 py-1 hover:opacity-50 text-xl font-bold w-1/3 rounded-xl bg-hackathon-green-300 mt-3"
      onClick={async () => {
        setText("Loading...");
        console.log("loading");
        await onClick();
        setText(text);
      }}
    >
      {displayText}
    </button>
  );
};

export default Button;
