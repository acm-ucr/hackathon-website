"use client";
import { useEffect, useState } from "react";
import Header from "./Header";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Title from "../admin/Title.jsx";
import Team from "./Team";
import User from "./User";
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
      <Header email={user.email} name={user.name} />
      <Row className="h-full overflow-scroll gap-3 justify-center">
        <Col xl={6} className="h-full">
          <User user={user} setUser={setUser} edit={edit} setEdit={setEdit} />
        </Col>
        {user.roles.participants === 1 && (
          <Col xl={5} className="h-full">
            <Team user={user} team={user.team} setUser={setUser} />
          </Col>
        )}
      </Row>
    </div>
  );
};

export default Dashboard;
