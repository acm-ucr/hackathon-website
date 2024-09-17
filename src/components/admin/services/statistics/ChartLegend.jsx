import { ROLES } from "@/data/admin/Statistics";

const ChartLegend = () => {
  return (
    <div className="flex flex-wrap p-6">
      {Object.entries(ROLES).map(([key, { label, className, fill }]) => (
        <div key={key} className="flex items-center px-6">
          <div className={`mr-2 h-4 w-4 ${fill} rounded`}></div>
          <span className={`text-sm ${className}`}>{label}</span>
        </div>
      ))}
    </div>
  );
};

export default ChartLegend;
