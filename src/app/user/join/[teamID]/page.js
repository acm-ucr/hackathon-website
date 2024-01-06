"use client";
import { useState, useEffect } from "react";
import Button from "@/components/dynamic/Button";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import Fault from "@/utils/error";
import { api } from "@/utils/api";

export default function page({ params }) {
  const [team, setTeam] = useState(null);
  const router = useRouter();
  const { update: sessionUpdate } = useSession();
  const handleJoin = () => {
    api({
      method: "PUT",
      url: "/api/members",
      body: { team: params.teamID },
    }).then((response) => {
      if (response.message !== "OK") {
        toast(`❌ ${response.message}`);
        return;
      }
      toast("✅ Successfully joined team!");
      sessionUpdate({
        team: params.teamID,
      });
      router.push("/user");
    });
  };
  useEffect(() => {
    if (params.teamID) {
      api({
        method: "GET",
        url: `/api/team?teamid=${params.teamID}`,
      }).then((response) => {
        if (response.message === "OK") {
          setTeam(response.items);
        } else if (response.message === "Invalid Team ID") {
          throw new Fault(
            404,
            "Invalid Team ID",
            "Please get a new team invite"
          );
        } else {
          throw new Fault(
            500,
            "Internal Server Error",
            "Please contact the software engineering team for assistance"
          );
        }
      });
    }
  }, []);

  return (
    <div>
      {team && (
        <div className="flex flex-col w-screen h-screen items-center justify-center font-poppins">
          <p className="text-3xl">
            Are you sure you want to join{" "}
            <span className="font-bold">{team.name}</span>
          </p>
          <p className="mb-1 font-semibold">Members</p>
          {team.members.map((member, index) => (
            <p className="pl-3 m-0 flex items-center" key={index}>
              {member.name}
              <span className="ml-3 text-sm text-hackathon-green-300">
                {member.email}
              </span>
            </p>
          ))}
          <Button color="green" size="xl" text="Join" onClick={handleJoin} />
        </div>
      )}
    </div>
  );
}
