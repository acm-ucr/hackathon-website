import { TextareaCN } from "../../ui/textarea";

const TextArea = ({
  value,
  title,
  maxLength,
  placeholder,
  disabled,
  name,
  setUser,
  rows,
  className,
}) => {
  return (
    <TextareaCN
      data-cy={`${title}-textarea`}
      className={className}
      maxLength={maxLength}
      value={value}
      onChange={setUser}
      placeholder={placeholder}
      disabled={disabled}
      name={name}
      rows={rows}
    />
  );
};

export default TextArea;
