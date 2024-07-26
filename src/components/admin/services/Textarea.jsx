const Textarea = ({ object, setObject, label, maxLength }) => {
  return (
    <textarea
      data-cy={`${label}-textarea`}
      maxLength={maxLength}
      className="h-full w-full resize-none rounded-md border-2 p-2 outline-none"
      value={object[label]}
      onChange={(e) => {
        setObject({ ...object, [label]: e.target.value });
      }}
    />
  );
};

export default Textarea;
