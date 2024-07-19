"use client";
import Title from "@/components/admin/Title";
import { useEffect, useState } from "react";
import Tabs from "./Tabs";
import Loading from "@/components/Loading";
import { api } from "@/utils/api";

import Charts from "./Charts";

const Statistics = () => {
  const [counts, setCounts] = useState(null);

  useEffect(() => {
    api({
      method: "GET",
      url: "/api/statistics",
    }).then(({ items }) => setCounts(items));
  }, []);

  return (
    <div className="h-full font-poppins flex flex-col py-4">
      <Title title="Statistics" />
      {!counts ? (
        <Loading />
      ) : (
        <div>
          <Tabs counts={counts.users} events={counts.events} />
          <Charts counts={counts.users} />
        </div>
      )}
    </div>
  );
};

export default Statistics;
