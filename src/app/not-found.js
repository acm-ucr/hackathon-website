const error = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center fixed">
      <p className="text-center text-6xl font-bold text-hackathon-blue-100">
        404
      </p>
      <p className="text-center text-lg md:text-2xl font-bold text-black">
        Page Not Found
      </p>
      <p className="text-center text-sm md:text-lg  text-hackathon-blue-200">
        The page you are looking for does not seem to exist.
      </p>
    </div>
  );
};

export default error;
