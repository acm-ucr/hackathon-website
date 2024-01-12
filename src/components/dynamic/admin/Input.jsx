import { MdCancel } from "react-icons/md";

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
      {showLabel && <p className="text-lg font-extrabold mr-2 my-0">{label}</p>}

      <div className="flex items-center my-1 bg-hackathon-gray-100 rounded-md w-full">
        <input
          data-cy={`${label}-input`}
          value={value}
          maxLength={maxLength}
          placeholder={placeholder}
          type="text"
          className="outline-none w-full font-poppins text-base py-1 bg-transparent px-2"
          onChange={onChangeFn}
        />
        {clear && (
          <MdCancel
            className="hover:cursor-pointer text-xl text-hackathon-gray-300 mr-2 hover:text-hackathon-gray-200"
            onClick={clearFn}
            data-cy={`${label}-clear-input`}
          />
        )}
      </div>
    </div>
  );
};

export default Input;
