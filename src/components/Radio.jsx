const Radio = ({
  text,
  field,
  options,
  user,
  setUser,
  editable = true,
  required,
}) => {
  const handleClick = (option, field) => {
    setUser({
      ...user,
      [field]:
        field === "tier" || field === "affiliation" || field === "panelist"
          ? option[0]
          : option[1],
    });
  };

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
          {Object.entries(options).map((option, index) => (
            <div
              data-cy={`radio-${option[1]}`}
              className="flex items-center whitespace-nowrap hover:cursor-pointer"
              key={index}
              onClick={() => handleClick(option, field)}
            >
              <div className="rounded-full w-4 border-black border aspect-square bg-transparent p-0.5 mr-1">
                <div
                  data-cy={`radio-button-${option[1]}`}
                  className={`rounded-full w-full aspect-square duration-100 ${
                    user[field] === option[0] || user[field] === option[1]
                      ? "bg-hackathon-green-300"
                      : "bg-transparent"
                  }`}
                />
              </div>
              {option[1]}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Radio;
