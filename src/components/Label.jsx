import React from "react";

const Label = ({ label }) => {
  return (
    <div className="flex justify-content-center align-items-center w-fit h-fit px-4 py-1 bg-hackathon-gray text-secondary rounded-full">
      {label}
    </div>
  );
};

export default Label;
