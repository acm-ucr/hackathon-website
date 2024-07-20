import { Checkbox as Check } from "./ui/checkbox";

const Checkbox = ({ toggle, onClick = () => {}, text = "", color }) => {
  return (
    <div
      className="flex items-center hover:cursor-pointer w-fit"
      onClick={onClick}
      data-cy="checkbox"
    >
      <Check
        checked={toggle}
        onChange={onClick}
        className={`w-4 h-4 rounded-sm mr-2 ${
          toggle
            ? `${color ? color : "bg-hackathon-blue-100"}`
            : "bg-hackathon-gray-100"
        }`}
        data-cy="checkbox-bg"
      />
      {text && (
        <p className="my-0 pt-0" data-cy="checkbox-text">
          {text}
        </p>
      )}
    </div>
  );
};

export default Checkbox;
