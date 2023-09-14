"use client";
import { useState } from "react";
import ProfileHeader from "./Header";
import Tag from "../admin/Tag";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { GENDERS, GRADES, MAJORS } from "@/data/forms/Information";
import Select from "../Select";
import { SCHOOLS } from "@/data/forms/Schools";
import Radio from "../Radio";
import Title from "../Admin/Title.jsx";
import teamList from "../../../cypress/fixtures/Teams.json";
import TeamInfo from "./Team";
import UserInfo from "./User";
import mockUser from "../../../cypress/fixtures/User.json";

const Dashboard = () => {
  const [user, setUser] = useState(mockUser);
  const [edit, setEdit] = useState(false);

  return (
    <div className="w-full">
      <Title title="Dashboard" />
      <div className="flex justify-between items-center">
        <ProfileHeader email="hello" name="hello" />
        <div className="text-right">
          <p className="text-xl font-bold mb-0">Status</p>
          <Tag
            color={{
              text: "text-hackathon-tags-yellow-text",
              background: "bg-hackathon-tags-yellow-bg",
            }}
            text="pending"
          />
        </div>
      </div>
      <Row>
        <Col xl={6}>
          <UserInfo
            handleEdit={() => setEdit(true)}
            handleSave={() => setEdit(false)}
            user={user}
            setUser={setUser}
            editable={edit}
          />
          <Select
            title="School"
            options={SCHOOLS}
            field="school"
            user={user}
            setUser={setUser}
            editable={edit}
          />
          <Select
            title="Major"
            options={MAJORS}
            field="major"
            user={user}
            setUser={setUser}
            editable={edit}
          />
          <Select
            title="Grade"
            options={GRADES}
            field="grade"
            user={user}
            setUser={setUser}
            editable={edit}
          />
          <Radio
            text="Gender"
            options={GENDERS}
            field="gender"
            user={user}
            setUser={setUser}
            editable={edit}
          />
        </Col>
        <Col xl={6}>
          {user.team ? (
            <TeamInfo user={user} team={teamList[0]} />
          ) : (
            <p>no team</p>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
