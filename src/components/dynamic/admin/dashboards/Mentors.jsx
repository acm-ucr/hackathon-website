"use client";

import { useState } from "react";
import Dashboard from "../Dashboard.jsx";
// import {
//   FILTERS,
//   HEADERS,
//   TAGS,
//   DROPDOWN,
//   STATUSES,
// } from "@/data/dynamic/admin/Mentors.js";

const Mentors = () => {
  const [mentors, setMentors] = useState(null);

  return (
    <Dashboard mentors={mentors} setMentors={setMentors} />
    // <div className="h-full font-poppins flex flex-col py-4 gap-3">
    //   <div className="flex">
    //     <Title title="Mentors" />
    //     <Filters
    //       filters={filters}
    //       setFilters={setFilters}
    //       setObjects={setMentors}
    //       objects={mentors}
    //       input={input.input}
    //     />
    //   </div>
    //   <Toolbar
    //     input={input}
    //     setInput={setInput}
    //     tags={TAGS}
    //     setObjects={setMentors}
    //     objects={mentors}
    //     filters={filters}
    //     file="MENTORS"
    //     headers={headers}
    //     page="mentors"
    //   />
    //   <Table
    //     headers={headers}
    //     empty="No Mentors Available"
    //     setHeaders={setHeaders}
    //     setObjects={setMentors}
    //     objects={mentors}
    //     Dropdown={DROPDOWN}
    //     statuses={STATUSES}
    //   />
    // </div>
  );
};

export default Mentors;
