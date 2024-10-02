import BulletPoints from "./BulletPoints";

const BulletList = ({ text, list }) => {
  return (
    <div className="w-full rounded-xl bg-white p-4 drop-shadow-md">
      <div className="flex items-center justify-between text-xl font-bold">
        {text}
      </div>
      <BulletPoints list={list} />
    </div>
  );
};

export default BulletList;
