import Input from "../Input";

const TeamInfo = ({ user, team, setUser }) => {
  return (
    <div>
      <Input
        name="team"
        type="text"
        title="Team Name"
        value={user.team}
        user={user}
        setUser={setUser}
        editable={true}
      />
      <Input
        name="github"
        type="text"
        title="Github Link"
        value={user.github}
        user={user}
        editable={true}
      />
      <Input
        name="devpost"
        type="text"
        title="Devpost Link"
        value={user.devpost}
        user={user}
        editable={true}
      />

      <div>
        {team.members.map((member, index) => (
          <p className="m-0" key={index}>
            {member}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TeamInfo;
