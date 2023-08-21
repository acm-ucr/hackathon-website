"use client";
import React from "react";

const FormPage = ({ title, children, restrictions }) => {
  return (
    <div className="w-full flex justify-center h-full overflow-scroll">
      <title>{title}</title>
      <div className="w-11/12 h-full">{children}</div>
    </div>
  );
};

export default FormPage;
