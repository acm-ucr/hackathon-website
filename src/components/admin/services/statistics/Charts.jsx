import Chart from "./Chart";

const Charts = ({ counts }) => {
  const order = ["status", "shirt", "diet", "school"];

  return (
    <>
      <div className="mt-3 grid w-full grid-cols-2 gap-4 p-4 md:grid-cols-4">
        {order.map((title) =>
          Object.entries(counts).map(([category, data]) =>
            Object.entries(data)
              .filter(([key]) => key === title)
              .map(([key, sizes], index) => {
                if (key != "status") {
                  return Object.entries(sizes)
                    .filter(([statusType, sizeData]) =>
                      Object.values(sizeData).some((count) => count > 0),
                    )
                    .map(([type, sizeData]) => {
                      const data = Object.entries(sizeData).reduce(
                        (acc, [size, count]) => {
                          acc[size] = (acc[size] || 0) + count;
                          return acc;
                        },
                        {},
                      );
                      return (
                        <Chart
                          key={index}
                          title={`${category}-${key}-${type}`}
                          data={data}
                        />
                      );
                    });
                } else if (key === "status") {
                  if (Object.values(sizes).some((count) => count > 0)) {
                    return (
                      <Chart
                        key={index}
                        title={`${category}-${key}`}
                        data={sizes}
                      />
                    );
                  }
                }
                return null;
              })
              .filter((chart) => chart !== null),
          ),
        )}
      </div>
    </>
  );
};

export default Charts;
