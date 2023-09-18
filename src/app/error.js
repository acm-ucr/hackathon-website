"use client";

export default function Error({ error }) {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center fixed">
      <p className="text-center text-9xl font-extrabold text-hackathon-blue-100 m-0">
        500
      </p>
      <p className="text-center text-lg md:text-2xl font-bold text-black m-0">
        Internal Server Error
      </p>
      <p className="text-center text-sm md:text-lg  text-hackathon-blue-200 m-0">
        Please contact the web development team for assistance.
      </p>
    </div>
  );
}
