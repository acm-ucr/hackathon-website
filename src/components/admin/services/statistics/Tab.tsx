type props = {
  title: string;
  value: number;
};

const Tab = ({ title, value }: props) => {
  return (
    <div className="flex w-full flex-col justify-center rounded-lg bg-white p-2 text-center drop-shadow-md">
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
