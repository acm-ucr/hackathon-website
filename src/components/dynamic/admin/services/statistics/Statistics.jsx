"use client";
import Title from "@/components/dynamic/admin/Title";
import { useEffect, useState } from "react";
import Tabs from "./Tabs";
import axios from "axios";
import Loading from "@/components/dynamic/Loading";

const Statistics = () => {
  const [counts, setCounts] = useState({
    users: {},
    events: {},
  });

  useEffect(() => {
    axios.get("/api/statistics").then((response) => {
      setCounts(response.data.items);
    });
  }, []);

  return (
    <div className="h-full font-poppins flex flex-col py-4">
      <Title title="Statistics" />
      <Tabs counts={counts.users} events={counts.events} />
    </div>
  );
};

export default Statistics;
