const Input = ({
  name,
  type,
  title,
  placeholder,
  value,
  user,
  setUser,
  editable = true,
  maxLength,
  required,
  regex,
}) => {
  return (
    <div className="flex flex-col w-full">
      <p className="mb-1 font-semibold">
        {title}
        {required && <span className="text-red-500">*</span>}
      </p>
      <input
        disabled={!editable}
        className="truncate disabled:border-0 border-b-2 border-black pl-3 w-full focus:outline-none placeholder:text-hackathon-gray-200 bg-transparent"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        maxLength={maxLength}
        onBlur={(e) => {
          if (regex && !regex.test(e.target.value)) {
            setUser({ ...user, [name]: "Invalid " + title });
          }
        }}
        onChange={(e) => setUser({ ...user, [name]: e.target.value })}
        data-cy={`${name}-input`}
      />
    </div>
  );
};

export default Input;
