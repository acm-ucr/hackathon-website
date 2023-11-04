import { BsCheckLg } from "react-icons/bs";

const Checkbox = ({ toggle, onClick = () => {}, text = "", color }) => {
  return (
    <div
      className="flex items-center hover:cursor-pointer w-fit"
      onClick={onClick}
      data-cy="checkbox"
    >
      <div
        data-cy="checkbox-bg"
        className={`w-4 h-4 rounded-sm ${
          toggle
            ? `${color ? color : "bg-hackathon-blue-100"}`
            : "bg-hackathon-gray-100"
        } flex items-center justify-center`}
      >
        <BsCheckLg
          data-cy="checkmark"
          className={`${
            toggle ? "text-white" : "text-hackathon-gray-100"
          } text-lg`}
        />
      </div>
      {text && <p className="pl-3 my-0 pt-0">{text}</p>}
    </div>
  );
};

export default Checkbox;
