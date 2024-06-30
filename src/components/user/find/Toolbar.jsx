"use client";

import Input from "@/components/admin/Input";
import { useState } from "react";

const Toolbar = ({}) => {
  const [input, setInput] = useState({
    search: "",
  });

  return (
    <>
      <div className="flex items-center justify-between w-full">
        <Input
          classes="w-full"
          setObject={setInput}
          object={input}
          label="search"
          showLabel={false}
          maxLength={100}
          placeholder="Search"
          clear={true}
        />
      </div>
    </>
  );
};

export default Toolbar;
