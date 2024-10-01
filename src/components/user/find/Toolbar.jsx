"use client";

import Input from "@/components/admin/Input";
import { useState } from "react";

const Toolbar = ({ data, setSearch }) => {
  const [input, setInput] = useState({
    search: "",
  });

  const onChange = (id, value) => {
    setInput((prev) => ({ ...prev, [id]: value }));
    const filter = data.filter(
      ({ text, techs }) =>
        text.toLowerCase().includes(value.toLowerCase()) ||
        techs.some((tech) => tech.toLowerCase().includes(value.toLowerCase())),
    );
    setSearch(filter);
  };

  return (
    <>
      <div className="flex w-full items-center justify-between">
        <Input
          classes="w-full"
          setObject={setInput}
          object={input}
          label="search"
          showLabel={false}
          maxLength={100}
          placeholder="Search"
          onChangeFn={(e) => onChange("search", e.target.value)}
          clear={true}
        />
      </div>
    </>
  );
};

export default Toolbar;
