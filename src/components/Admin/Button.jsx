import { sizes } from "@/data/admin/buttonColor";
import { colors } from "@/data/admin/buttonColor";
const Button = ({ color, text, onClick, size }) => {
  return (
    <button
      data-cy={`${text}-button`}
      className={`${colors[color].bg} ${colors[color].text} ${sizes[size]} ${colors[color].border} py-1 hover:opacity-50 font-bold rounded-lg px-4`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
