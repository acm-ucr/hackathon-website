import { TextareaCN } from "../../ui/textarea";

const TextArea = ({
  value,
  label,
  maxLength,
  placeholder,
  disabled,
  name,
  onChange,
  rows,
  className,
}) => {
  return (
    <TextareaCN
      data-cy={`${label}-textarea`}
      className={className}
      maxLength={maxLength}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      name={name}
      rows={rows}
    />
  );
};

export default TextArea;
