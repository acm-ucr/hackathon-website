import { BsCircleFill, BsCircle } from "react-icons/bs";

const Radio = ({ text, field, options, user, setUser, editable = true }) => {
  const handleClick = (option) => {
    setUser({ ...user, [field]: option });
  };

  return (
    <div className="flex flex-col">
      <p className="mb-1 font-semibold">{text}</p>
      {!editable && <div className="pl-3">{user[field]}</div>}
      {editable && (
        <div className="grid grid-flow-row grid-cols-2 md:grid-cols-3 w-full">
          {options.map((option, index) => (
            <div
              className="flex items-center whitespace-nowrap hover:cursor-pointer"
              key={index}
              onClick={() => handleClick(option)}
            >
              {option === user[field] ? (
                <BsCircleFill className="mx-1 w-3.5 h-3.5 text-hackathon-green-300 border-[1.5px] p-0.5 rounded-full border-black" />
              ) : (
                <BsCircle className="mx-1 h-3.5 w-3.5" />
              )}
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Radio;
