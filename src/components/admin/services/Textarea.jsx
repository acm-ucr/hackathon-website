const Textarea = ({ object, setObject, label, maxLength }) => {
  return (
    <textarea
      data-cy={`${label}-textarea`}
      maxLength={maxLength}
      className="w-full h-full border-2 rounded-md p-2 outline-none resize-none"
      value={object[label]}
      onChange={(e) => {
        setObject({ ...object, [label]: e.target.value });
      }}
    />
  );
};

export default Textarea;
