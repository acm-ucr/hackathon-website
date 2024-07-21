import Hackpacks from "../Hackpacks";
import Toolbar from "../find/Toolbar";
import Title from "@/components/admin/Title";

const Resources = () => {
  return (
    <>
      <div className="pb-3 pt-4">
        <Title title="Hackpacks" />
      </div>
      <Toolbar />
      <div className="mt-4">
        <Hackpacks />;
      </div>
    </>
  )
};

export default Resources;
