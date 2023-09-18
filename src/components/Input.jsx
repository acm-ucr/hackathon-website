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
    <div className="mt-3">
      <p className="mb-1">
        {title}
        <span className="text-hackathon-green-300">{required && " *"}</span>
      </p>
      <input
        disabled={!editable}
        className="disabled:border-0 border-b-2 border-black pl-3 w-full focus:outline-none placeholder:text-hackathon-gray-200 bg-transparent"
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
