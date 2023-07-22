import Judging from "@/components/Judging";
import React from "react";
import JudgeAdd from "@/components/Judges";
const Page = () => {
  return (
    <div className="w-5/6 h-screen flex flex-row ">
      <Judging />
      <JudgeAdd />
    </div>
  );
};

export default Page;
