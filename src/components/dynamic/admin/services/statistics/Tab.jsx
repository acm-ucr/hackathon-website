import Title from "@/components/dynamic/admin/Title";

const Tab = ({ title, value, handleClick, tab }) => {
  return (
    <div
      className={`text-center w-full ${
        tab === title ? "bg-hackathon-gray-100 rounded-t-xl" : ""
      }`}
      onClick={() => handleClick(title)}
    >
      <Title title={title} classes="text-2xl font-medium" />
      <Title title={value} classes="text-5xl font-extrabold" />
    </div>
  );
};

export default Tab;
