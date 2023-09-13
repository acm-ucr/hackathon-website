import { SIZES, COLORS } from "@/data/Button";

const Button = ({ color, text, onClick, size }) => {
  return (
    <button
      data-cy={`${text}-button`}
      className={`${COLORS[color].bg} ${COLORS[color].text} ${SIZES[size]} ${COLORS[color].border} py-1 hover:opacity-50 font-bold rounded-lg px-4`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
