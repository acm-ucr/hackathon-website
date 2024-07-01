import { fetchTeamData } from "@/actions/join";
import JoinClient from "@/components/user/join/JoinClient";

const Join = async ({ params }) => {
  // const [team, setTeam] = useState(null);

  const { id } = params;
  const team = await fetchTeamData(id);

  return <div>{team ? <JoinClient /> : <p>team not found</p>}</div>;
};

export default Join;
