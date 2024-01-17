"use client";
import Title from "@/components/dynamic/admin/Title";
import { api } from "@/utils/api";
import Button from "../../Button";

const Settings = () => {
  syncStatsWithDatabase(() => {
    api({
      method: "GET",
      url: "/api/statistics",
    }).then(({ items }) => setCounts(items));
  });

  return (
    <div className="h-full font-poppins flex flex-col py-4">
      <Title title="Settings" />
      <Button text="Sync Stats" onClick={syncStatsWithDatabase} />
    </div>
  );
};

export default Settings;
