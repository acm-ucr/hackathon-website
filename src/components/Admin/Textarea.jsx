const Textarea = ({ object, setObject, label }) => {
  return (
    <textarea
      className="w-full h-full border-2 rounded-md p-2 outline-none"
      value={object[label]}
      onChange={(e) => {
        setObject({ ...object, [label]: e.target.value });
      }}
    />
  );
};

export default Textarea;
