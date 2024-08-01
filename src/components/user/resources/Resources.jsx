import { HACKPACKS } from "@/data/user/Hackpacks";
import Toolbar from "../find/Toolbar";
import Title from "@/components/admin/Title";
import Hackpack from "./Hackpack";

const Resources = () => {
  return (
    <>
      <div className="pb-3 pt-4">
        <Title title="Hackpacks" />
      </div>
      <Toolbar />
      <div className="mt-8 grid grid-cols-4 gap-4">
        {HACKPACKS.map(({ text, techs, link, description }, index) => (
          <Hackpack
            key={index}
            text={text}
            techs={techs}
            link={link}
            description={description}
          />
        ))}
      </div>
    </>
  );
};

export default Resources;
