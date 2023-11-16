"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "@/components/dynamic/Button";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import Fault from "@/utils/error";

export default function page({ params }) {
  const [team, setTeam] = useState(null);
  const router = useRouter();
  const { update: sessionUpdate } = useSession();
  const handleJoin = () => {
    axios
      .put("/api/members", { team: params.teamID })
      .then(() => {
        toast("✅ Successfully joined team!");
        sessionUpdate({
          team: params.teamID,
        });
        router.push("/users");
      })
      .catch((response) => {
        if (response.data.message === "Excceed 4 People Limit")
          toast("❌ Exceeded 4 People Limit");
        else if (response.data.message === "Invalid Team ID")
          toast("❌ Invalid Team ID");
        else toast("❌ Internal Server Error");
      });
  };
  useEffect(() => {
    if (params.teamID) {
      axios
        .get(`/api/team?teamid=${params.teamID}`)
        .then((response) => setTeam(response.data.items))
        .catch(({ response: data }) => {
          if (data.data.message === "Invalid Team ID")
            throw new Fault(
              404,
              "Invalid Team ID",
              "Please get a new team invite"
            );
          else
            throw new Fault(
              500,
              "Internal Server Error",
              "Please contact the software engineering team for assistance"
            );
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
