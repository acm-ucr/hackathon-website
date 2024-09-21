import { getServerSession } from "next-auth";
import { options } from "@/utils/auth";
import Dashboard from "./Dashboard";

const DashboardWrapper = async () => {
  const session = await getServerSession(options);
  return <Dashboard session={session} />;
};

export default DashboardWrapper;
