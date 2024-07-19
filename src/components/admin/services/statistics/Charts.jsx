import Chart from "./Chart";

const Charts = ({ counts }) => {
  return (
    <>
      <div className="w-full mt-3 grid md:grid-cols-4 grid-cols-2 p-4 gap-4">
        {Object.entries(counts).map(([title, data], index) => (
          <Chart key={index} title={title} data={data} />
        ))}
      </div>
    </>
  );
};

export default Charts;
