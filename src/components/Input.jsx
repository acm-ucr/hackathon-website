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
}) => {
  return (
    <div className="mt-3 border-b-2 border-black">
      <p className="mb-1">{title}</p>
      <input
        disabled={!editable}
        className="pl-3 w-full focus:outline-none placeholder:text-hackathon-gray-200"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        maxLength={maxLength}
        onChange={(e) => setUser({ ...user, [name]: e.target.value })}
      />
    </div>
  );
};

export default Input;
