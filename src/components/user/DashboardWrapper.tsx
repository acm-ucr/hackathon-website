import { options } from "@/utils/auth";
import { getServerSession } from "next-auth";
import Providers from "../Providers";
import Dashboard from "./Dashboard";

const DashboardWrapper = async () => {
  const session = await getServerSession(options);
  return (
    <Providers session={session}>
      <Dashboard />
    </Providers>
  );
};

export default DashboardWrapper;
