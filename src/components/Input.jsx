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
  parentClassNames,
  inputClassNames,
  onChange,
}) => {
  return (
    <div className={parentClassNames ?? "mt-3 border-b-2 border-black"}>
      {title && <p className="mb-1">{title}</p>}
      <input
        disabled={!editable}
        className={
          inputClassNames ??
          "pl-3 w-full focus:outline-none placeholder:text-hackathon-gray-200"
        }
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        maxLength={maxLength}
        onChange={
          onChange ?? ((e) => setUser({ ...user, [name]: e.target.value }))
        }
      />
    </div>
  );
};

export default Input;
