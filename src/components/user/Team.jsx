import Input from "../Input";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Team = ({ user, team, setUser }) => {
  return (
    <Row className="bg-white rounded-lg p-4 gap-3 m-2">
      {user.team ? (
        <>
          <Col>
            <Input
              name="teams"
              type="text"
              title="Team Name"
              value={user.team}
              user={user}
              setUser={setUser}
              editable={true}
            />
          </Col>
          <Col>
            <Input
              name="github"
              type="text"
              title="Github Link"
              value={user.github}
              user={user}
              editable={true}
            />
          </Col>
          <Col>
            <Input
              name="devpost"
              type="text"
              title="Devpost Link"
              value={user.devpost}
              user={user}
              editable={true}
            />
          </Col>
          <Col>
            {team.members.map((member, index) => (
              <p className="m-0" key={index}>
                {member}
              </p>
            ))}
          </Col>
        </>
      ) : (
        <p>no team</p>
      )}
    </Row>
  );
};

export default Team;
