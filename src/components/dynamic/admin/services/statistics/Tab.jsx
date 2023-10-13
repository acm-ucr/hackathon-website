import Title from "@/components/dynamic/admin/Title";

const Tab = ({ title, value }) => {
  return (
    <div className="text-center w-full">
      <Title title={title} classes="text-2xl font-medium" />
      <Title title={value} classes="text-5xl font-extrabold" />
    </div>
  );
};

export default Tab;
