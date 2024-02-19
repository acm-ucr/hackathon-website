import Title from "@/components/dynamic/admin/Title";
// import { useEffect, useState } from "react";
import Tabs from "./Tabs";
import Loading from "@/components/dynamic/Loading";
import { api } from "@/utils/api";
// import Fault from "@/utils/error";

const Statistics = async () => {
  // const [counts, setCounts] = useState(null);

  const { items } = await api({
    method: "GET",
    url: "@/app/api/statistics",
  });

  console.log("items", items);

  return (
    <div className="h-full font-poppins flex flex-col py-4">
      <Title title="Statistics" />
      {!items ? (
        <Loading />
      ) : (
        <Tabs counts={items.users} events={items.events} />
      )}
    </div>
  );
};

export default Statistics;
