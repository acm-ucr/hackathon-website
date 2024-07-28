import { useState } from "react";
import { FaPencil, FaCheck } from "react-icons/fa6";
import { TextareaCN } from "@/components/ui/textarea";

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
        {required && <span className="text-red-500">*</span>}
      </p>
      {editable && !edit && (
        <FaPencil className="hover:cursor-pointer" onClick={handleEdit} />
      )}
      {editable && edit && (
        <FaCheck className="hover:cursor-pointer" onClick={handleSave} />
      )}
      <TextareaCN
        data-cy={`${title}-textarea`}
        className="border-1 w-full resize-none border border-black pl-3 placeholder:text-hackathon-gray-200 focus:outline-none"
        maxLength={maxLength}
        value={value}
        onChange={(e) => setUser({ ...user, [name]: e.target.value })}
        placeholder={placeholder}
        disabled={editable && !edit}
        name={name}
        rows={rows}
      />
    </div>
  );
};

export default Textarea;
