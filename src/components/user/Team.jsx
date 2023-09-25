import Button from "../Button";
import Input from "../Input";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
const Team = ({ user, setUser }) => {
  const [team, setTeam] = useState(null);
  const [edit, setEdit] = useState(false);
  const handleLeave = () => {};
  // const handleJoin = () => {};
  const handleEdit = () => {
    setEdit(true);
  };

  const handleSave = async () => {
    await axios.post("/api/team", team);
    toast("✅ Successfully Update!");
    setEdit(false);
  };
  useEffect(() => {
    axios.get("/api/team").then((response) => setTeam(response.data.items));
  }, []);
  console.log(team);
  return (
    <div className="bg-white rounded-lg p-4 gap-3 m-2 flex flex-col">
      {team ? (
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

          {team.members.map((member, index) => (
            <p className="m-0" key={index}>
              {member}
            </p>
          ))}

          <Button text="leave team" onClick={handleLeave} />
          {edit && <Button text="done" onClick={handleSave} />}
          {!edit && <Button text="edit" onClick={handleEdit} />}
        </>
      ) : (
        <>
          <Input
            name="team"
            type="text"
            placeholder="team ID"
            title="Join a Team"
            value={user.team}
            user={user}
            editable={edit}
          />
        </>
      )}
    </div>
  );
};

export default Team;
