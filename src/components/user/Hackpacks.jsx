import { HACKPACKS } from "@/data/user/Hackpacks";
import Hackpack from "./Hackpack";

const Hackpacks = () => {
  return (
    <div className="mt-2 flex flex-col items-center justify-center gap-2">
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
