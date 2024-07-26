const BulletList = ({ text, children }) => {
  return (
    <div className="w-full rounded-xl bg-white p-4 drop-shadow-md">
      <div className="flex items-center justify-between text-xl font-bold">
        {text}
      </div>
      <div className="max-h-[1000px] overflow-hidden">{children}</div>
    </div>
  );
};

export default BulletList;
