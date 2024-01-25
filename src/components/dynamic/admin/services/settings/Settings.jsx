"use client";
import Title from "@/components/dynamic/admin/Title";
import { api } from "@/utils/api";
import Button from "../../Button";
import { useState } from "react";

const Settings = () => {
  const [message, setMessage] = useState();
  const syncStatsWithDatabase = () => {
    setMessage("Syncing Stats...");
    api({
      method: "GET",
      url: "/api/settings",
    }).then(() => setMessage("Stats Synced!"));
  };

  return (
    <div className="h-full font-poppins flex flex-col py-4">
      <Title title="Settings" />
      <Button
        text="Sync Stats"
        color="green"
        size="xl"
        onClick={syncStatsWithDatabase}
      />
      <p>{message}</p>
    </div>
  );
};

export default Settings;
