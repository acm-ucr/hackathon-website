import Button from "../Button";
import Input from "../Input";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Loading from "../Loading";
import { BiLink, BiSolidCopy } from "react-icons/bi";

const Team = ({ user, setUser }) => {
  const [team, setTeam] = useState(null);
  const [id, setId] = useState({});
  const [edit, setEdit] = useState(false);
  const defaultTeam = {
    name: "",
    github: "",
    devpost: "",
    figma: "",
    members: [{ email: user.email, name: user.name }],
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(user.team);
    toast("✅ Successfully copy team ID to clipboard!");
  };
  const handleCopyLink = () => {
    navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_URL}users/join/${user.team}`
    );
    toast("✅ Successfully copy join link to clipboard!");
  };
  const handleLeave = () => {
    axios.delete("/api/members").then(() => {
      toast("✅ Successfully left team!");
      setTeam(null);
      setUser({ ...user, team: null });
      setId({});
    });
  };

  const handleJoin = () => {
    axios
      .put("/api/members", { team: id.team })
      .then(() => {
        toast("✅ Successfully joined team!");
        setUser({ ...user, team: id.team });
      })
      .catch(({ response: data }) => {
        if (data.data.message === "Excceed 4 People Limit")
          toast("❌ Exceeded 4 People Limit");
        else if (data.data.message === "Invalid Team ID")
          toast("❌ Invalid Team ID");
        else toast("❌ Internal Server Error");
      });
  };

  const handleCreate = () => {
    axios.post("/api/team").then((response) => {
      setTeam(defaultTeam);
      setUser({ ...user, team: response.data.items.team });
      toast("✅ Successfully created a new team!");
      setEdit(false);
    });
  };

  const handleEdit = async () => {
    setEdit(true);
  };

  const handleSave = () => {
    if (!(team.github === "" || team.github.includes("github.com/"))) {
      toast("❌ Invalid Github Link");
      return;
    }
    if (!(team.devpost === "" || team.devpost.includes("devpost.com/"))) {
      toast("❌ Invalid Devpost Link");
      return;
    }
    if (!(team.figma === "" || team.figma.includes("figma.com/"))) {
      toast("❌ Invalid Figma Link");
      return;
    }
    axios.put("/api/team", team).then(() => {
      toast("✅ Successfully Update!");
      setEdit(false);
    });
  };

  useEffect(() => {
    if (user.team) {
      axios
        .get(`/api/team?teamid=${user.team}`)
        .then((response) => setTeam(response.data.items))
        .catch(({ response: data }) => {
          if (data.message === "Invalid Team ID") toast("❌ Invalid Team ID");
          else toast("❌ Internal Server Error");
        });
    }
  }, [user.team]);

  return (
    <div className="bg-white rounded-lg p-4 gap-3 m-2 overflow-scroll max-h-[70vh]">
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
            placeholder="no team name"
          />

          <Input
            name="github"
            type="text"
            title="Github"
            value={team.github.replace("https://", "")}
            user={team}
            editable={edit}
            setUser={setTeam}
            placeholder="N/A"
          />

          <Input
            name="devpost"
            type="text"
            title="Devpost"
            value={team.devpost.replace("https://", "")}
            user={team}
            editable={edit}
            setUser={setTeam}
            placeholder="N/A"
          />

          <Input
            name="figma"
            type="text"
            title="Figma (please set share permision)"
            value={team.figma.replace("https://", "")}
            user={team}
            editable={edit}
            setUser={setTeam}
            placeholder="N/A"
          />
          <div>
            <p className="mb-1 font-semibold">Members</p>
            {team.members.map((member, index) => (
              <p className="pl-3 m-0 flex items-center" key={index}>
                {member.name}
                <span className="ml-3 text-sm text-hackathon-green-300">
                  {member.email}
                </span>
              </p>
            ))}
          </div>
          <div className="mt-3 pt-2">
            <p className="mb-1 font-semibold">Team ID</p>
            <p className="pl-3 mb-0 flex items-center">
              {user.team}{" "}
              <BiSolidCopy
                onClick={handleCopy}
                className="text-lg text-gray-400 ml-2 hover:cursor-pointer hover:text-hackathon-blue-100"
              />
              <BiLink
                onClick={handleCopyLink}
                className="text-lg text-gray-400 ml-2 hover:cursor-pointer hover:text-hackathon-blue-100"
              />
            </p>
          </div>
          <div className="flex items-center justify-end gap-4">
            {edit && (
              <Button
                color="green"
                size="xl"
                text="done"
                onClick={handleSave}
              />
            )}
            {!edit && (
              <Button
                color="green"
                size="xl"
                text="edit"
                onClick={handleEdit}
              />
            )}
            <Button color="red" text="leave" onClick={handleLeave} />
          </div>
        </>
      )}
      {!user.team && (
        <>
          <div>
            <Input
              name="team"
              type="text"
              placeholder="team ID"
              title="Join a Team"
              value={id.team}
              user={id}
              editable={true}
              setUser={setId}
            />
            <Button
              color="green"
              size="xl"
              text="join team"
              onClick={handleJoin}
            />
          </div>
          <Button
            color="green"
            size="xl"
            text="create new team"
            onClick={handleCreate}
          />
        </>
      )}
    </div>
  );
};

export default Team;
