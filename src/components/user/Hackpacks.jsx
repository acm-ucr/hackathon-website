import { HACKPACKS } from "@/data/user/Hackpacks";
import Hackpack from "./Hackpack";

const Hackpacks = () => {
  return (
    <div className="grid grid-cols-4 mt-4">
      {HACKPACKS.map((hackpack, index) => (
        <Hackpack
          key={index}
          text={hackpack.text}
          techs={hackpack.techs}
          link={hackpack.link}
        />
      ))}
    </div>
  );
};

export default Hackpacks;
