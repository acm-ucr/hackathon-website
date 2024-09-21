"use client";
import { HACKPACKS } from "@/data/user/Hackpacks";
import Toolbar from "../find/Toolbar";
import Title from "@/components/admin/Title";
import Hackpack from "./Hackpack";
import { useState } from "react";

const Resources = () => {
  const [search, setSearch] = useState(HACKPACKS);
  return (
    <>
      <div className="pb-3 pt-4">
        <Title title="Hackpacks" />
      </div>
      <Toolbar data={HACKPACKS} setSearch={setSearch} />
      <div className="mt-8 grid grid-cols-4 gap-4">
        {search.map(({ text, techs, link, description }, index) => (
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
