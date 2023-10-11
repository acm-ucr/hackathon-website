import { useState } from "react";
import { FaPencil, FaCheck } from "react-icons/fa6";

const Textarea = ({
  name,
  rows,
  title,
  placeholder,
  value,
  user,
  setUser,
  maxLength,
  editable = false,
  required,
}) => {
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(true);
  };

  const handleSave = () => {
    setEdit(false);
  };

  return (
    <div className="flex flex-col">
      <p className="mb-1 font-semibold">
        {title}
        {required && <span className="text-hackathon-green-300">*</span>}
      </p>
      {editable && !edit && (
        <FaPencil className="hover:cursor-pointer" onClick={handleEdit} />
      )}
      {editable && edit && (
        <FaCheck className="hover:cursor-pointer" onClick={handleSave} />
      )}
      <textarea
        data-cy={`${title}-textarea`}
        disabled={editable && !edit}
        className="border-2 border-black pl-3 w-full focus:outline-none placeholder:text-hackathon-gray-200 resize-none"
        name={name}
        placeholder={placeholder}
        value={value}
        maxLength={maxLength}
        onChange={(e) => setUser({ ...user, [name]: e.target.value })}
        rows={rows}
      />
    </div>
  );
};

export default Textarea;
