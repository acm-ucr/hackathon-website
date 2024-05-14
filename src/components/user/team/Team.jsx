import Title from "@/components/admin/Title";
import Details from "./Details";

const Team = () => {
  return (
    <div className="h-full flex flex-col py-4 gap-3">
      <Title title="Team" />
      <div className="w-full md:w-1/2">
        <Details />
      </div>
    </div>
  );
};

export default Team;
