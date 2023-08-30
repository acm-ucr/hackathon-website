import { MdCancel } from "react-icons/md";

const Input = ({ object, setObject, clear, label, maxLength, placeholder }) => {
  const handleInput = (e) => {
    setObject({ ...object, [label]: e.target.value });
  };
  return (
    <div className="flex items-center">
      <p className="text-lg font-extrabold mr-2 my-0">{label}:</p>
      <div className="flex items-center my-1 bg-hackathon-gray-100 rounded-md w-full">
        <input
          value={object[label]}
          maxLength={maxLength}
          placeholder={placeholder}
          type="text"
          className="outline-none w-full font-poppins text-base py-1 bg-transparent px-2"
          onChange={handleInput}
        />
        {clear && (
          <MdCancel
            className="hover:cursor-pointer text-xl text-hackathon-darkgray-300 mr-2"
            onClick={() => setObject({ ...object, [label]: "" })}
          />
        )}
      </div>
    </div>
  );
};

export default Input;
