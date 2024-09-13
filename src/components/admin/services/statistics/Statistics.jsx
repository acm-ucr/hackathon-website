"use client";
import Title from "@/components/admin/Title";
import Subtitle from "@/components/admin/Subtitle";
import Tabs from "./Tabs";
import Loading from "@/components/Loading";

import Charts from "./Charts";
import { getStats } from "./actions";
import { useQuery } from "@tanstack/react-query";
import ChartLegend from "@/components/admin/services/statistics/ChartLegend";
const Statistics = () => {
  const { data: counts } = useQuery({
    queryKey: ["/admin/statistics"],
    queryFn: async () => getStats(),
  });

  return (
    <div className="flex h-full flex-col py-4 font-poppins">
      <Title title="Statistics" />
      {!counts ? (
        <Loading />
      ) : (
        <div className="mt-4">
          <Subtitle title="Registrations" />
          <Tabs events={counts.events} />
          <Subtitle title="Attendance" />
          <ChartLegend />
          <Charts counts={counts.users} />
        </div>
      )}
    </div>
  );
};

export default Statistics;
