"use client";
import { useState } from "react";
import Title from "../Title.jsx";
import Filters from "../Filters.jsx";
import Toolbar from "./Toolbar.jsx";
import Table from "../Table.jsx";
import { FILTERS, HEADERS, TAGS } from "@/data/admin/Feedback.js";

const Admin = () => {
  const [feedback, setFeedback] = useState(null);
  const [input, setInput] = useState({
    input: "",
  });
  const [filters, setFilters] = useState(FILTERS);
  const [headers, setHeaders] = useState(HEADERS);

  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <div className="flex">
        <Title title="Feedback" />
        <Filters
          filters={filters}
          setFilters={setFilters}
          setObjects={setFeedback}
          objects={feedback}
          input={input.input}
        />
      </div>
      <Toolbar
        input={input}
        setInput={setInput}
        tags={TAGS}
        setObjects={setFeedback}
        objects={feedback}
        filters={filters}
        page="admins"
      />
      <Table
        headers={headers}
        empty="No Admin Available"
        setHeaders={setHeaders}
        setObjects={setFeedback}
        objects={feedback}
      />
    </div>
  );
};
export default Admin;
