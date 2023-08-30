import Input from "../Input";

const TeamInfo = ({ user, team }) => {
  return user ? (
    <div>
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
        {team.map((member, memberIndex) => (
          <div key={memberIndex}>
            <p>TEAM MEMBER {memberIndex + 1}</p>
            <p>{member.members[memberIndex]}</p>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <p className="w-full text-center">No info</p>
  );
};

export default TeamInfo;
