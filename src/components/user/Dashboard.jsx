"use client";
import Countdown from "./Countdown";
import Header from "./Header";
import { useSession } from "next-auth/react";
import Tile from "./Tile";
import { QrCode, ParkingCircle } from "lucide-react";
import Rooms from "./Rooms";
import Packing from "./Packing";
import BulletList from "./BulletList";
import BulletPoints from "./BulletPoints";
import { JUDGING } from "@/data/user/Judging";
import { RULES } from "@/data/user/Rules";
import Resources from "./Resources";

const Dashboard = () => {
  const { data: session } = useSession();
  return (
    <div className="flex h-full flex-col gap-3 py-4 font-poppins">
      <Header email={session.user.email} name={session.user.name} />
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        <div className="col-span-1 md:col-span-2">
          <Countdown />
          <div className="mt-4 flex flex-col gap-4 md:flex-row">
            <Tile
              icon={<QrCode size={40} />}
              text="Check In"
              link="/user/checkin"
            />
            <Tile
              icon={<ParkingCircle size={40} />}
              text="Parking Info"
              link="https://transportation.ucr.edu/visitor-parking"
            />
          </div>
          <Rooms />
          <Packing />
        </div>

        <div className="flex flex-col gap-4">
          <BulletList text="Rules">
            <BulletPoints list={RULES} />
          </BulletList>
          <BulletList text="Judging">
            <BulletPoints list={JUDGING} />
          </BulletList>
          <Resources />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
