"use client";
import Title from "@/components/admin/Title";
import { api } from "@/utils/api";
import Button from "../../Button";
import { showToast } from "@/utils/toaster";

const Settings = () => {
  const syncStatsWithDatabase = () => {
    showToast("Syncing Stats...", "info");
    api({
      method: "GET",
      url: "/api/settings",
    })
      .then(() => showToast("Stats Synced!", "success"))
      .catch(() => showToast("Failed to sync stats.", "error"));
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
    </div>
  );
};

export default Settings;
