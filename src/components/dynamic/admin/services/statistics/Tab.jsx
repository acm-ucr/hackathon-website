const Tab = ({ title, value }) => {
  return (
    <div className="text-center w-full">
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
