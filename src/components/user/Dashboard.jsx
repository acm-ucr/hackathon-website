"use client";
import Countdown from "./Countdown";
import Header from "./Header";
import { useSession } from "next-auth/react";
import Tile from "./Tile";
import { BsQrCode } from "react-icons/bs";
import { LuParkingCircle } from "react-icons/lu";
import Rooms from "./Rooms";
import Packing from "./Packing";
import Hackpacks from "./Hackpacks";
import Collapse from "./Collapse";
import { useState } from "react";
import BulletPoints from "./BulletPoints";
import { JUDGING } from "@/data/user/Judging";
import { RULES } from "@/data/user/Rules";

const Dashboard = () => {
  const { data: session } = useSession();
  const [expand, setExpand] = useState("Rules");

  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Header email={session.user.email} name={session.user.name} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <div className="col-span-2">
          <Countdown />
          <div className="flex gap-4">
            <Tile icon={<BsQrCode />} text="Check In" link="/user/checkin" />
            <Tile
              icon={<LuParkingCircle />}
              text="Parking Info"
              link="https://transportation.ucr.edu/visitor-parking"
            />
          </div>
          <Rooms />
          <Packing />
        </div>

        <div className="flex flex-col gap-4">
          <Collapse setExpand={setExpand} expand={expand} text="Rules">
            <BulletPoints list={RULES} />
          </Collapse>
          <Collapse setExpand={setExpand} expand={expand} text="Judging">
            <BulletPoints list={JUDGING} />
          </Collapse>
          <Collapse setExpand={setExpand} expand={expand} text="Hackpacks">
            <Hackpacks />
          </Collapse>
        </div>

        {/* <User user={user} setUser={setUser} edit={edit} setEdit={setEdit} />
        {user.roles.participants === 1 && (
          <Team user={user} team={user.team} setUser={setUser} />
        )} */}
      </div>
    </div>
  );
};

export default Dashboard;
