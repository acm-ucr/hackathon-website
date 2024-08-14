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
}) => {
  return (
    <div className="flex w-full flex-col">
      <p className="mb-1 font-semibold">
        {title}
        {required && <span className="text-red-500">*</span>}
      </p>
      <input
        disabled={!editable}
        className="w-full truncate border-b-2 border-black bg-transparent pl-3 placeholder:text-hackathon-gray-200 focus:outline-none disabled:border-0"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        maxLength={maxLength}
        onChange={(e) => setUser({ ...user, [name]: e.target.value })}
        data-cy={`${name}-input`}
      />
    </div>
  );
};

export default Input;
