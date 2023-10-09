"use client";
import { useState } from "react";
import Dashboard from "../Dashboard.jsx";
// import {
//   FILTERS,
//   HEADERS,
//   TAGS,
//   DROPDOWN,
//   STATUSES,
// } from "@/data/dynamic/admin/Volunteers";

const Volunteers = () => {
  const [volunteers, setVolunteers] = useState(null);

  return (
    <Dashboard volunteers={volunteers} setVolunteers={setVolunteers} />
    // <div className="h-full font-poppins flex flex-col py-4 gap-3">
    //   <div className="flex">
    //     <Title title="Volunteers" />
    //     <Filters
    //       filters={filters}
    //       setFilters={setFilters}
    //       setObjects={setVolunteers}
    //       objects={volunteers}
    //       input={input.input}
    //     />
    //   </div>
    //   <Toolbar
    //     input={input}
    //     setInput={setInput}
    //     tags={TAGS}
    //     setObjects={setVolunteers}
    //     objects={volunteers}
    //     filters={filters}
    //     file="VOLUNTEERS"
    //     headers={headers}
    //     page="volunteers"
    //   />
    //   <Table
    //     headers={headers}
    //     empty="No Volunteers Available"
    //     setHeaders={setHeaders}
    //     setObjects={setVolunteers}
    //     objects={volunteers}
    //     Dropdown={DROPDOWN}
    //     statuses={STATUSES}
    //   />
    // </div>
  );
};

export default Volunteers;
