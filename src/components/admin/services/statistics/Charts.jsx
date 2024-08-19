import Chart from "./Chart";

const Charts = ({ counts }) => {
  const order = ["status", "shirt", "diet"];
  return (
    <>
      <div className="mt-3 grid w-full grid-cols-2 gap-4 p-4 md:grid-cols-4">
        {order.map((title) =>
          Object.entries(counts).map(([category, data]) =>
            Object.entries(data)
              .filter(
                ([key, sizes]) =>
                  key === title &&
                  Object.values(sizes).some((count) => count > 0),
              )
              .map(([title, data], index) => (
                <Chart key={index} title={`${category}-${title}`} data={data} />
              )),
          ),
        )}
      </div>
    </>
  );
};

export default Charts;
