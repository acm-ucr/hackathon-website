"use client";
import { useState } from "react";
import ProfileHeader from "./Header";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Title from "../admin/Title.jsx";
import TeamInfo from "./Team";
import UserInfo from "./User";
import mockUser from "../../../cypress/fixtures/user.json";

const Dashboard = () => {
  const [user, setUser] = useState(mockUser);
  const [edit, setEdit] = useState(false);

  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Title title="Dashboard" />
      <ProfileHeader email={user.email} name={user.name} />
      <Row className="h-full">
        <Col xl={6} className="h-full">
          <UserInfo
            handleEdit={() => setEdit(true)}
            handleSave={() => setEdit(false)}
            user={user}
            setUser={setUser}
            editable={edit}
          />
        </Col>
        <Col xl={6} className="h-full">
          <TeamInfo user={user} team={user.team} />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
