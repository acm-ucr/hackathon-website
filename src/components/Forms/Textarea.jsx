import { useState } from "react";
import { FaPencil, FaCheck } from "react-icons/fa6";

const Textarea = ({
  name,
  type,
  title,
  placeholder,
  value,
  user,
  setUser,
  editable = false,
}) => {
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(true);
  };

  const handleSave = () => {
    setEdit(false);
  };

  return (
    <div className="mt-3 border-b-2 border-black">
      <p className="mb-1">{title}</p>
      {editable && !edit && (
        <FaPencil className="hover:cursor-pointer" onClick={handleEdit} />
      )}
      {editable && edit && (
        <FaCheck className="hover:cursor-pointer" onClick={handleSave} />
      )}
      <textarea
        disabled={editable && !edit}
        className="pl-3 w-full focus:outline-none placeholder:text-hackathon-placeholder"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        style={{ resize: "none", height: "50px" }}
        onChange={(e) => setUser({ ...user, [name]: e.target.value })}
      />
    </div>
  );
};

export default Textarea;
