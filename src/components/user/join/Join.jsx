import { fetchTeamData } from "@/actions/join";
import JoinClient from "@/components/user/join/JoinClient";

const Join = async ({ params }) => {
  const { teamID: id } = params;
  const team = await fetchTeamData(id);

  return <div>{team ? <JoinClient team={team} id={id} /> : ""}</div>;
};

export default Join;
