"use client";
import { useEffect, useState } from "react";
import ProfileHeader from "./Header";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Title from "../admin/Title.jsx";
import TeamInfo from "./Team";
import UserInfo from "./User";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session } = useSession();
  const [user, setUser] = useState(session.user);
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    const data = {};
    user.diet.forEach((option) => {
      data[option] = true;
    });
    setUser({ ...user, diet: data });
  }, []);
  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Title title="Dashboard" />
      <ProfileHeader email={user.email} name={user.name} />
      <Row className="h-full">
        <Col xl={6} className="h-full">
          <UserInfo
            user={user}
            setUser={setUser}
            edit={edit}
            setEdit={setEdit}
          />
        </Col>
        {user.status.participants === "accept" && (
          <Col xl={6} className="h-full">
            <TeamInfo user={user} team={user.team} setUser={setUser} />
          </Col>
        )}
      </Row>
    </div>
  );
};

export default Dashboard;
