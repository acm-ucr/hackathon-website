"use client";
import Countdown from "./Countdown";
import Header from "./Header";
import { useSession } from "next-auth/react";
import Tile from "./Tile";
import Link from "next/link";
import { BsQrCode } from "react-icons/bs";
import { LuParkingCircle } from "react-icons/lu";
import Rooms from "./Rooms";
import Packing from "./Packing";
import Judging from "./Judging";
import Rules from "./Rules";
import Hackpacks from "./Hackpacks";

const Dashboard = () => {
  const { data: session } = useSession();

  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Header email={session.user.email} name={session.user.name} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <div className="col-span-2">
          <Countdown />
          <div className="flex gap-8">
            <Link className="w-1/2" href="/user/checkin">
              <Tile
                icon={<BsQrCode className="text-black" size={85} />}
                text="Check In"
              />
            </Link>
            <Link
              className="w-1/2"
              href="https://transportation.ucr.edu/visitor-parking#parking-options-how-to-pay"
            >
              <Tile
                icon={<LuParkingCircle className="text-black" size={85} />}
                text="Parking Info"
              />
            </Link>
          </div>
          <Rooms />
          <Packing />
        </div>

        <div>
          <Judging />
          <Rules />
          <Hackpacks />
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
