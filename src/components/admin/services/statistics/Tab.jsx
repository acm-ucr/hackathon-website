const Tab = ({ title, value }) => {
  return (
    <div className="text-center w-full rounded-lg drop-shadow-md flex flex-col justify-center bg-white p-2">
      <div data-cy={`${title}-tab`} className="text-2xl font-medium">
        {title}
      </div>
      <div data-cy={`${value}-value`} className="text-5xl font-extrabold">
        {value}
      </div>
    </div>
  );
};

export default Tab;
