"use client";

import Input from "@/components/admin/Input";
import { useState } from "react";

const Toolbar = ({}) => {
  const [input, setInput] = useState({
    search: "",
  });

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
          clear={true}
        />
      </div>
    </>
  );
};

export default Toolbar;
