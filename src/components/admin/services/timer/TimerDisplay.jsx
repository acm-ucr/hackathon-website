const TimerDisplay = ({ time }) => (
  <div className="flex items-center mt-10 space-x-2">
    {["Hours", "Minutes", "Seconds"].map((label) => (
      <div key={label} className="flex flex-col items-center text-center">
        <div className="text-4xl p-4 bg-gray-200 rounded-md w-20">
          {time[label.toLowerCase()]}
        </div>
        <div className="text-md">{label}</div>
      </div>
    ))}
  </div>
);

export default TimerDisplay;
