"use client";
import { useState } from "react";
import Dashboard from "../Dashboard.jsx";
// import {
//   DROPDOWN
// } from "@/data/dynamic/admin/Admins.js";

const Judges = () => {
  const [judges, setJudges] = useState(null);
  const title = "Judges";
  const page = "judges";
  const empty = "No Judges Available";
  const file = "JUDGES";
  const dropdown = "";

  return (
    <Dashboard
      objects={judges}
      setObjects={setJudges}
      title={title}
      page={page}
      empty={empty}
      file={file}
      dropdown={dropdown}
    />
    // <div className="h-full font-poppins flex flex-col py-4 gap-3">
    //   <div className="flex">
    //     <Title title="Judges" />
    //     <Filters
    //       filters={filters}
    //       setFilters={setFilters}
    //       setObjects={setJudges}
    //       objects={judges}
    //       input={input.input}
    //     />
    //   </div>
    //   <Toolbar
    //     input={input}
    //     setInput={setInput}
    //     tags={TAGS}
    //     setObjects={setJudges}
    //     objects={judges}
    //     filters={filters}
    //     file="JUDGES"
    //     headers={headers}
    //     page="judges"
    //   />
    //   <Table
    //     headers={headers}
    //     empty="No Judges Available"
    //     setHeaders={setHeaders}
    //     setObjects={setJudges}
    //     objects={judges}
    //     statuses={STATUSES}
    //   />
    // </div>
  );
};
export default Judges;
