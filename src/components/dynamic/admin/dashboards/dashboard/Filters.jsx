import Filter from "./Filter";

const Filters = ({ statuses, filters, setFilters }) => {
  const selectedFilters =
    filters.find(({ id }) => id === "status")?.value || [];

  return (
    <div className="w-fit grid grid-cols-6 gap-2">
      {Object.entries(statuses).map(([key, value]) => (
        <Filter
          key={key}
          value={parseInt(key)}
          status={value}
          isActive={selectedFilters.includes(parseInt(key))}
          setFilters={setFilters}
        />
      ))}
    </div>
  );
};

export default Filters;
