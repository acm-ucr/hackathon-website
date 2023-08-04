const Input = ({ name, type, title, placeholder, value, onChange }) => {
  return (
    <div className="mt-3 border-b-2 border-black">
      <p className="mb-1">{title}</p>
      <input
        className="pl-3 w-full focus:outline-none placeholder:text-hackathon-placeholder"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
