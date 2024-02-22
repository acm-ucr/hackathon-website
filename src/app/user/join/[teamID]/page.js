"use client";
import { useState, useEffect } from "react";
import Button from "@/components/dynamic/Button";
import { useRouter } from "next/navigation";
import toaster from "@/utils/toaster";
import { useSession } from "next-auth/react";
import Fault from "@/utils/error";
import { api } from "@/utils/api";

export default function Page({ params }) {
  const [team, setTeam] = useState(null);
  const router = useRouter();
  const { update: sessionUpdate } = useSession();

  const { teamID } = params;

  const handleJoin = () => {
    api({
      method: "PUT",
      url: "/api/members",
      body: { team: teamID },
    }).then((response) => {
      if (response.message !== "OK") {
        toaster(`${response.message}`, "error");
        return;
      }
      toaster("Successfully joined team!", "success");
      sessionUpdate({
        team: teamID,
      });
      router.push("/user");
    });
  };

  useEffect(() => {
    if (teamID) {
      api({
        method: "GET",
        url: `/api/team?teamid=${teamID}`,
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
  }, [teamID]);

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
