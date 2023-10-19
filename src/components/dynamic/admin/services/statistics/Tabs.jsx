import Tab from "./Tab";

const Tabs = ({ counts }) => {
  return (
    <div className="w-full mt-3 grid grid-cols-7">
      {Object.entries(counts).map(([title, count], index) => (
        <Tab key={index} title={title} value={count} />
      ))}
    </div>
  );
};

export default Tabs;
