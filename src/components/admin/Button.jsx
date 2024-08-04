import { SIZES, COLORS } from "@/data/Button";

const Button = ({ color, text, onClick, size, disabled = false }) => {
  return (
    <button
      data-cy={`${text}-button`}
      className={`${COLORS[color].bg} ${COLORS[color].text} ${SIZES[size]} ${COLORS[color].border} rounded-lg px-4 py-1 font-bold hover:opacity-50 disabled:opacity-50`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
