import Chart from "./Chart";

const Charts = ({ counts }) => {
  return (
    <>
      <div className="mt-3 grid w-full grid-cols-2 gap-4 p-4 md:grid-cols-4">
        {Object.entries(counts).map(([title, data], index) => (
          <Chart key={index} title={title} data={data} />
        ))}
      </div>
    </>
  );
};

export default Charts;
