"use client";
import Title from "@/components/admin/Title";
import { api } from "@/utils/api";
import Button from "../../Button";
import toaster from "@/utils/toaster";

const Settings = () => {
  const syncStatsWithDatabase = () => {
    toaster("Syncing Stats...", "loading");
    api({
      method: "GET",
      url: "/api/settings",
    })
      .then(() => toaster("Stats Synced!", "success"))
      .catch(() => toaster("Failed to sync stats.", "error"));
  };

  return (
    <div className="flex h-full flex-col py-4 font-poppins">
      <Title title="Settings" />
      <Button
        text="Sync Stats"
        color="green"
        size="xl"
        onClick={syncStatsWithDatabase}
      />
    </div>
  );
};

export default Settings;
