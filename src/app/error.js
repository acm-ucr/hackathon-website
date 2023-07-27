"use client";

import { useEffect } from "react";

export default function Error({ error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center fixed">
      <p className="text-center text-6xl font-bold text-hackathon-blue-100">
        500
      </p>
      <p className="text-center text-lg md:text-2xl font-bold text-black">
        {error.message}
      </p>
      <p className="text-center text-sm md:text-lg  text-hackathon-blue-200"></p>
    </div>
  );
}
