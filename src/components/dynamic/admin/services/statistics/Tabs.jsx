import { TABS, CHARTS } from "@/data/dynamic/admin/statistics/Statistics";
import Tab from "./Tab";

const Tabs = ({ tab, setTab, setConfig }) => {
  const handleClick = (selected) => {
    setTab(selected);
    setConfig(CHARTS[selected]);
  };

  return (
    <div className="flex w-full">
      {TABS.map((title, index) => (
        <Tab
          key={index}
          title={title}
          value="300"
          handleClick={handleClick}
          tab={tab}
        />
      ))}
    </div>
  );
};

export default Tabs;
