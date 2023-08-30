"use client";
import { useState } from "react";
import ProfileHeader from "./Header";
import Tag from "../Admin/Tag";
import { Col, Row } from "react-bootstrap";
import { Genders, Grades, Majors } from "@/data/Register";
import Select from "../Select";
import { Schools } from "@/data/Schools";
import Radio from "../Radio";
import Input from "../Input";
import { teamList } from "@/data/mock/teams";
import { FaPencil, FaCheck } from "react-icons/fa6";
import TeamInfo from "./TeamInfo";

const Dashboard = () => {
  const [user, setUser] = useState({
    phone: "123 123 1234",
    grade: "undergraduate",
    school: "samepl scool",
    major: "nothing im useless",
    gender: "everythijg",
    team: "The team ",
    github: "www.github.com",
    devpost: "www.devpost.com",
  });

  const [edit, setEdit] = useState(false);
  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleSave = () => {
    setEdit(false);
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <ProfileHeader email="hello" name="hello" />
          {edit ? (
            <FaCheck
              className="hover:cursor-pointer ml-2"
              onClick={handleSave}
            />
          ) : (
            <FaPencil
              className="hover:cursor-pointer ml-2"
              onClick={handleEdit}
            />
          )}
        </div>
        <div className="text-right">
          <p className="text-xl font-bold mb-0">Status</p>
          <Tag color="yellow" text="pending" />
        </div>
      </div>
      <Row>
        <Col xl={6}>
          <Input
            name="phone"
            type="phone"
            title="Phone Number"
            value={user.phone}
            user={user}
            setUser={setUser}
            editable={edit}
          />
          <Select
            title="School"
            options={Schools}
            field="school"
            user={user}
            setUser={setUser}
            editable={edit}
          />
          <Select
            title="Major"
            options={Majors}
            field="major"
            user={user}
            setUser={setUser}
            editable={edit}
          />
          <Select
            title="Grade"
            options={Grades}
            field="grade"
            user={user}
            setUser={setUser}
            editable={edit}
          />
          <Radio
            text="Gender"
            options={Genders}
            field="gender"
            user={user}
            setUser={setUser}
            editable={edit}
          />
        </Col>
        <Col xl={6}>
          <Input
            name="team"
            type="text"
            title="Team Name"
            value={user.team}
            user={user}
            setUser={setUser}
            editable={true}
          />

          {user.team ? (
            <TeamInfo user={user} team={teamList} />
          ) : (
            <p>no team</p>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
