import React from "react";

const Label = ({ label }) => {
  return (
    <div className="flex justify-content-center p-1 px-4 bg-hackathon-gray text-secondary rounded-pill h-50">
      {label}
    </div>
  );
};

export default Label;
