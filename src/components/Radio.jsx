import { RadioGroup, RadioGroupItem } from "./ui/radio";

const Radio = ({
  text,
  field,
  options,
  user,
  setUser,
  editable = true,
  required,
  onClick,
}) => {
  return (
    <div data-cy={`radio-${field}`} className="flex flex-col">
      <p className="mb-1 font-semibold">
        {text}
        {required && <span className="text-red-500">*</span>}
      </p>
      {!editable && (
        <div data-cy={`radio-${field}-default`} className="pl-3">
          {user[field]}
        </div>
      )}
      {editable && (
        <RadioGroup value={user[field]}>
          {Object.values(options).map((option, index) => (
            <div
              key={index}
              className="flex items-center whitespace-nowrap hover:cursor-pointer"
              data-cy={`radio-${option.toLowerCase()}`}
            >
              <RadioGroupItem
                value={option}
                defaultValue={option}
                onClick={() => onClick(option, field)}
                data-cy={`radio-button-${option.toLowerCase()}`}
                className={`${
                  user[field] === option
                    ? "fill-hackathon-green-300"
                    : "fill-current"
                }`}
              />
              {option}
            </div>
          ))}
        </RadioGroup>
      )}
    </div>
  );
};

export default Radio;
