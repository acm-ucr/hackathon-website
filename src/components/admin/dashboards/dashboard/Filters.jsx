import Filter from "./Filter";

const Filters = ({ statuses, filters, setFilters }) => {
  const selectedFilters =
    filters.find(({ id }) => id === "status")?.value || [];

  return (
    <div className="flex w-full gap-2 lg:w-4/12">
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
