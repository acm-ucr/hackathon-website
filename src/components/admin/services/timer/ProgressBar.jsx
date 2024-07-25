const ProgressBar = ({ totalSeconds, ogTotalSeconds }) => {
  const progress = ogTotalSeconds
    ? ((ogTotalSeconds - totalSeconds) / ogTotalSeconds) * 100
    : 0;
  return (
    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mt-4">
      <div
        className="h-full rounded-full  bg-blue-500 transition-width duration-500 ease-out"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
