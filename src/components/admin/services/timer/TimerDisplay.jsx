const TimerDisplay = ({ time }) => (
  <div className="mt-10 flex items-center space-x-2">
    {["Hours", "Minutes", "Seconds"].map((label) => (
      <div key={label} className="flex flex-col items-center text-center">
        <div className="w-20 rounded-md bg-gray-200 p-4 text-4xl">
          {time[label.toLowerCase()]}
        </div>
        <div className="text-md">{label}</div>
      </div>
    ))}
  </div>
);

export default TimerDisplay;
