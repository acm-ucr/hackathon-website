import React from "react";

const UnauthorizedError = ({ message }) => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center fixed">
      <p className="text-center text-6xl font-extrabold text-hackathon-blue-100 m-0">
        401
      </p>
      <p className="text-center text-lg md:text-2xl font-bold text-black m-0">
        Unauthorized
      </p>
      <p className="text-center text-sm md:text-lg  text-hackathon-blue-200 m-0">
        {message}
      </p>
    </div>
  );
};

export default UnauthorizedError;
