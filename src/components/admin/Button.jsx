import { SIZES, COLORS } from "@/data/Button";

const Button = ({ color, text, onClick, size, disabled = false }) => {
  return (
    <button
      data-cy={`${text}-button`}
      className={`${COLORS[color].bg} ${COLORS[color].text} ${SIZES[size]} ${COLORS[color].border} py-1 disabled:opacity-50 hover:opacity-50 font-bold rounded-lg px-4`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
