"use client";
import { useState } from "react";
import ProfileHeader from "./Header";
import Tag from "../Admin/Tag";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Genders, Grades, Majors } from "@/data/Register";
import Select from "../Select";
import { Schools } from "@/data/Schools";
import Radio from "../Radio";
import Input from "../Input";
import { FaPencil, FaCheck } from "react-icons/fa6";
import Title from "../Admin/Title.jsx";

const Dashboard = () => {
  const [user, setUser] = useState({
    phone: "123 123 1234",
    grade: "undergraduate",
    school: "samepl scool",
    major: "nothing im useless",
    gender: "everythijg",
    team: "lololol",
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
        <Title title="Dash Board" />
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
            editable={edit}
          />
          <p>team id lolololololol</p>
          <Input
            name="github"
            type="text"
            title="Github Link"
            value={user.github}
            user={user}
            setUser={setUser}
            editable={edit}
          />
          <Input
            name="devpost"
            type="text"
            title="Devpost Link"
            value={user.devpost}
            user={user}
            setUser={setUser}
            editable={edit}
          />
          <p>TEAM MEMBER 1</p>
          <p>TEAM MEMBER 2</p>
          <p>TEAM MEMBER 3</p>
          <p>TEAM MEMBER 4</p>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
