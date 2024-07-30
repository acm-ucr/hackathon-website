"use client";
import Countdown from "./Countdown";
import Header from "./Header";
import { useSession } from "next-auth/react";
import Tile from "./Tile";
import { QrCode, ParkingCircle } from "lucide-react";
import Rooms from "./Rooms";
import Packing from "./Packing";
// import Hackpacks from "./Hackpacks";
import BulletList from "./BulletList";
// import { useState } from "react";
import BulletPoints from "./BulletPoints";
import { JUDGING } from "@/data/user/Judging";
import { RULES } from "@/data/user/Rules";
import ResourcesLink from "./ResourcesLink";
// import Collapse from "./Collapse";

const Dashboard = () => {
  const { data: session } = useSession();
  // const [expand, setExpand] = useState("Rules");

  return (
    <div className="flex h-full flex-col gap-3 py-4 font-poppins">
      <Header email={session.user.email} name={session.user.name} />
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        <div className="col-span-1 md:col-span-2">
          <Countdown />
          <div className="mt-4 flex flex-col gap-4 md:flex-row">
            <Tile icon={<QrCode />} text="Check In" link="/user/checkin" />
            <Tile
              icon={<ParkingCircle />}
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
          <ResourcesLink />
          {/* <Collapse setExpand={setExpand} expand={expand} text="Hackpacks">
            <Hackpacks />
          </Collapse> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
