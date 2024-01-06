const Radio = ({
  text,
  field,
  options,
  user,
  setUser,
  editable = true,
  required,
}) => {
  const handleClick = (option) => {
    setUser({ ...user, [field]: option });
  };

  return (
    <div data-cy={`radio-${field}`} className="flex flex-col">
      <p className="mb-1 font-semibold">
        {text}
        {required && <span className="text-hackathon-green-300">*</span>}
      </p>
      {!editable && (
        <div data-cy={`radio-${field}-default`} className="pl-3">
          {user[field]}
        </div>
      )}
      {editable && (
        <div className="grid grid-cols-2 md:grid-cols-3 w-full">
          {options.map((option, index) => (
            <div
              data-cy={`radio-${option}`}
              className="flex items-center whitespace-nowrap hover:cursor-pointer"
              key={index}
              onClick={() => handleClick(option)}
            >
              <div className="rounded-full w-4 border-black border aspect-square bg-transparent p-0.5 mr-1">
                <div
                  data-cy={`radio-button-${option}`}
                  className={`rounded-full w-full aspect-square duration-100 ${
                    option === user[field]
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
