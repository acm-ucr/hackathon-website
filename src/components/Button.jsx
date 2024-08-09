import { COLORS, SIZES } from "@/data/Button";

const Button = ({ onClick, text, loading, color, size }) => {
  return (
    <button
      disabled={loading}
      data-cy={`${text}-button`}
      className={`${loading ? COLORS["gray"].bg : COLORS[color].bg} ${
        loading ? COLORS["gray"].text : COLORS[color].text
      } ${SIZES[size]} ${
        COLORS[color].border
      } mt-3 rounded-md px-4 py-1 font-bold hover:opacity-50`}
      onClick={onClick}
    >
      {loading ? "Loading..." : text}
    </button>
  );
};

export default Button;
