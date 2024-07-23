import Title from "@/components/admin/Title";
import Details from "./Details";
import NewTeam from "./NewTeam";
import { getSession } from "@/utils/auth";
import { fetchTeam } from "@/actions/join";

const Team = async () => {
  const {
    user: { team },
  } = await getSession();

  const details = await fetchTeam(team);

  return (
    <div className="h-full flex flex-col py-4 gap-3">
      <Title title="Team" />
      {team === "" ? <NewTeam /> : <Details team={details} />}
    </div>
  );
};

export default Team;
