import { fetchTeam } from "@/actions/join";
import Invite from "@/components/user/join/Invite";

const Join = async ({ params }) => {
  const { teamID: id } = params;
  const team = await fetchTeam(id);

  return <div>{team && <Invite team={team} id={id} />}</div>;
};

export default Join;
