import React from "react";

interface ErrorParameters {
  code: string | number;
  error: string;
  message: string;
  dev: string;
}

const Error = ({
  code,
  error,
  message,
  dev,
}: ErrorParameters): React.ReactNode => {
  return (
    <div className="fixed flex h-screen w-screen flex-col items-center justify-center">
      <p className="m-0 text-center text-6xl font-extrabold text-hackathon-blue-100">
        {code}
      </p>
      <p className="m-0 text-center text-lg font-bold text-black md:text-2xl">
        {error}
      </p>
      <p className="m-0 text-center text-sm text-hackathon-blue-200 md:text-lg">
        {message}
      </p>
      {dev && (
        <p className="m-0 text-center text-sm text-hackathon-blue-200 md:text-lg">
          Developer Notes: {dev}
        </p>
      )}
    </div>
  );
};

export default Error;
