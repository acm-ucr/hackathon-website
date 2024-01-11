"use client";
import Title from "@/components/dynamic/admin/Title";
import { useEffect, useState } from "react";
import Tabs from "./Tabs";
import Loading from "@/components/dynamic/Loading";
import { api } from "@/utils/api";

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
        <Tabs counts={counts.users} events={counts.events} />
      )}
    </div>
  );
};

export default Statistics;
