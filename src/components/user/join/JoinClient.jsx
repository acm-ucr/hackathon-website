"use client";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Button from "@/components/Button";
import { api } from "@/utils/api";
import toaster from "@/utils/toaster";

const JoinClient = ({ team, id }) => {
  const router = useRouter();
  const { update: sessionUpdate } = useSession();

  const handleJoin = async () => {
    const response = await api({
      method: "PUT",
      url: "/api/members",
      body: { team: id },
    });
    if (response.message !== "OK") {
      toaster(`${response.message}`, "error");
      return;
    }
    toaster("Successfully joined team!", "success");
    sessionUpdate({
      team: id,
    });
    router.push("/user");
  };

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
};

export default JoinClient;
