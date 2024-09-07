import { X } from "lucide-react";

const Input = ({
  object,
  setObject,
  clear,
  label,
  value = object[label],
  showLabel = true,
  maxLength,
  placeholder,
  onChangeFn = (e) => setObject({ ...object, [label]: e.target.value }),
  clearFn = () => setObject({ ...object, [label]: "" }),
  classes,
}) => {
  return (
    <div className={`flex items-center ${classes}`}>
      {showLabel && <p className="my-0 mr-2 text-lg font-extrabold">{label}</p>}

      <div className="my-1 flex w-full items-center rounded-md bg-hackathon-gray-100">
        <input
          data-cy={`${label}-input`}
          value={value}
          maxLength={maxLength}
          placeholder={placeholder}
          type="text"
          className="w-full bg-transparent px-2 py-1 font-poppins text-base outline-none"
          onChange={onChangeFn}
        />
        {clear && (
          <X
            className="mr-2 text-xl text-hackathon-gray-300 hover:cursor-pointer hover:text-hackathon-gray-200"
            onClick={clearFn}
            data-cy={`${label}-clear-input`}
          />
        )}
      </div>
    </div>
  );
};

export default Input;
