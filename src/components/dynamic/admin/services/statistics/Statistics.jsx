"use client";
import Title from "@/components/dynamic/admin/Title";
// import PieChart from "@/components/dynamic/admin/services/PieChart";
// import Tag from "@/components/dynamic/admin/Tag";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import charts from "../../../../../../cypress/fixtures/pie_charts.json";
import { useState } from "react";
import Tabs from "./Tabs";
import Charts from "./Charts";
import { CHARTS } from "@/data/dynamic/admin/statistics/Statistics";

const Statistics = () => {
  const [tab, setTab] = useState("participants");
  const [config, setConfig] = useState(CHARTS["participants"]);

  return (
    <div className="h-full font-poppins flex flex-col py-4">
      <Title title="Statistics" />
      <Tabs tab={tab} setTab={setTab} setConfig={setConfig} />
      <Charts tab={tab} config={config} />
    </div>
  );
};

export default Statistics;
