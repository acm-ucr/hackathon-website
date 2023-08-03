import React from "react";

const Label = ({ label }) => {
  return (
    <div className="flex justify-content-center align-items-center w-0 h-0 px-5 py-3 bg-hackathon-gray text-secondary rounded-pill ">
      {label}
    </div>
  );
};

export default Label;
