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
        <div className="grid grid-cols-2 md:grid-cols-3 w-full">
          {Object.values(options).map((option, index) => (
            <div
              data-cy={`radio-${option.toLowerCase()}`}
              className="flex items-center whitespace-nowrap hover:cursor-pointer"
              key={index}
              onClick={() => onClick(option, field)}
            >
              <div className="rounded-full w-4 border-black border aspect-square bg-transparent p-0.5 mr-1">
                <div
                  data-cy={`radio-button-${option.toLowerCase()}`}
                  className={`rounded-full w-full aspect-square duration-100 ${
                    user[field] === option
                      ? "bg-hackathon-green-300"
                      : "bg-transparent"
                  }`}
                />
              </div>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Radio;
