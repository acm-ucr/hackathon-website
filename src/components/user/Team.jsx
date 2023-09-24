import Input from "../Input";

const Team = ({ user, team, setUser }) => {
  return (
    <div className="bg-white rounded-lg p-4 gap-3 m-2">
      {user.team ? (
        <>
          <Input
            name="teams"
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

          {team.members.map((member, index) => (
            <p className="m-0" key={index}>
              {member}
            </p>
          ))}
        </>
      ) : (
        <p>no team</p>
      )}
    </div>
  );
};

export default Team;
