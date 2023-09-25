import Button from "../Button";
import Input from "../Input";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Loading from "../Loading";
const Team = ({ user, setUser }) => {
  const [team, setTeam] = useState(null);
  const [teamID, setTeamID] = useState({});
  const [edit, setEdit] = useState(false);
  const handleLeave = () => {
    axios.delete("/api/members").then(() => {
      toast("✅ Successfully leave team!");
      setTeam(null);
      setUser({ ...user, team: null });
      setTeamID({});
    });
  };
  const handleJoin = () => {
    axios
      .put("/api/members", { team: teamID.team })
      .then(() => {
        toast("✅ Successfully join the team!");
        setUser({ ...user, team: teamID.team });
      })
      .catch(({ response }) => {
        if (response.data.message === "Excceed 4 People Limit")
          toast("❌ Excceed 4 People Limit");
        else if (response.data.message === "Invalid Team ID")
          toast("❌ Invalid Team ID");
        else toast("❌ Internal Server Error");
      });
  };
  const handleCreate = () => {
    axios.post("/api/team").then((response) => {
      setTeam({
        name: "No Team Name",
        github: "No Link",
        devpost: "No Link",
        figma: "No Link",
        members: [{ email: user.email, name: user.name }],
      });
      setUser({ ...user, team: response.data.items.team });
      toast("✅ Successfully create a new team!");
      setEdit(false);
    });
  };
  const handleEdit = async () => {
    setEdit(true);
  };

  const handleSave = () => {
    axios.put("/api/team", team).then(() => {
      toast("✅ Successfully Update!");
      setEdit(false);
    });
  };
  useEffect(() => {
    user.team &&
      axios.get("/api/team").then((response) => setTeam(response.data.items));
  }, [user.team]);
  return (
    <div className="bg-white rounded-lg p-4 gap-3 m-2 flex flex-col">
      {user.team && !team && <Loading />}
      {team && (
        <>
          <Input
            name="name"
            type="text"
            title="Team Name"
            value={team.name}
            user={team}
            setUser={setTeam}
            editable={edit}
          />

          <Input
            name="github"
            type="text"
            title="Github Link"
            value={team.github}
            user={team}
            editable={edit}
            setUser={setTeam}
          />

          <Input
            name="devpost"
            type="text"
            title="Devpost Link"
            value={team.devpost}
            user={team}
            editable={edit}
            setUser={setTeam}
          />

          <Input
            name="figma"
            type="text"
            title="Figma Link"
            value={team.figma}
            user={team}
            editable={edit}
            setUser={setTeam}
          />
          <div>
            <p className="mb-1 font-semibold">Members</p>
            {team.members.map((member, index) => (
              <p className="m-0" key={index}>
                {member.email + " " + member.name}
              </p>
            ))}
          </div>
          <div>
            <p className="mb-1 font-semibold">Team ID</p>
            <p className="mb-0">{user.team}</p>
          </div>
          <div className="flex items-center justify-center">
            {edit && <Button text="done" onClick={handleSave} />}
            {!edit && <Button text="edit" onClick={handleEdit} />}
          </div>
          <Button text="leave team" onClick={handleLeave} />
        </>
      )}
      {!user.team && (
        <>
          <div className="">
            <Input
              name="team"
              type="text"
              placeholder="team ID"
              title="Join a Team"
              value={teamID.team}
              user={teamID}
              editable={true}
              setUser={setTeamID}
            />
            <Button text="join team" onClick={handleJoin} />
          </div>
          <Button text="create a new team" onClick={handleCreate} />
        </>
      )}
    </div>
  );
};

export default Team;
