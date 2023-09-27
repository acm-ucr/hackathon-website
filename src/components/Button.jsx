import { useState } from "react";
import { COLORS, SIZES } from "@/data/Button";

const Button = ({ onClick, text, color = "green", size = "xl" }) => {
  const [loading, setLoading] = useState(false);
  return (
    <button
      data-cy={`${text}-button`}
      disabled={loading}
      className={`${loading ? COLORS["gray"].bg : COLORS[color].bg} ${
        loading ? COLORS["gray"].text : COLORS[color].text
      } ${SIZES[size]} ${
        COLORS[color].border
      } py-1 hover:opacity-50 font-bold px-4 rounded-xl mt-3`}
      onClick={() => {
        setLoading(true);
        onClick().then(() => setLoading(false));
      }}
    >
      {loading ? "Loading..." : text}
    </button>
  );
};

export default Button;
