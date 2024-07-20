import Tab from "./Tab";

const Tabs = ({ counts, events }) => {
  return (
    <>
      <div className="w-full mt-3 grid md:grid-cols-4 grid-cols-1 p-4 gap-4">
        {Object.entries(events).map(([title, count], index) => (
          <Tab key={index} title={title} value={count} />
        ))}
      </div>
    </>
  );
};

export default Tabs;
