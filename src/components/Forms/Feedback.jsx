"use client";

import React, { useState } from "react";
import Select from "@/components/Select";
import { Majors, Grades } from "@/data/Register";
import Input from "@/components/Input";
import { Row, Col } from "react-bootstrap";
import Button from "@/components/Forms/Button";
import { Helper } from "@/data/User";

const Mentor = () => {
  const [mentor, setMentor] = useState(Helper);

  const handleSubmit = () => {
    console.log(mentor);
    console.log(requirements);
  };

  return (
    <div className="w-full flex flex-col items-center font-poppins py-4">
      <div className="text-xl bg-hackathon-green-300 w-1/3 rounded-t-xl flex items-center justify-center p-3 font-semibold">
        FEEDBACK FORM
      </div>
      <div className="flex flex-col w-1/3 p-3 bg-white rounded-b-xl">
        <Row className="flex justify-center p-0 m-0">
          <Col xl={12}>
            Hello! Thank you for your participation in Rose Hack. We hope you
            enjoyed and learned some things from this event. Please fill out
            this anonymous feedback form below!
          </Col>
          <Col xl={6}>
            <Input
              name="feedback1"
              type="text"
              title="What was most helpful about the event?"
              placeholder="Workshops, team collaboration, mentorship..."
              value={mentor.first}
              user={mentor}
              setUser={setMentor}
            />
          </Col>
          <Col xl={6}>
            <Input
              name="last"
              type="text"
              title="Was there anything that you would have liked to see?"
              placeholder=""
              value={mentor.last}
              user={mentor}
              setUser={setMentor}
            />
          </Col>
          <Col xl={6}>
            <Input
              name="phone"
              type="phone"
              title="Was there anything that you did not find beneficial about the hackathon?"
              placeholder=""
              value={mentor.phone}
              user={mentor}
              setUser={setMentor}
            />
          </Col>
          <Col xl={6}>
            <Input
              name="email"
              type="email"
              title="How would you rate the hackathon?"
              placeholder="From 1 - 10"
              value={mentor.email}
              user={mentor}
              setUser={setMentor}
            />
          </Col>
          <Col xl={6}>
            <Input
              name="email"
              type="email"
              title="How did you find the event?"
              placeholder="Instagram, friends, etc"
              value={mentor.email}
              user={mentor}
              setUser={setMentor}
            />
          </Col>
          <Col xl={6}>
            <Input
              name="email"
              type="email"
              title="Is there anything else you'd like to let us know?"
              placeholder="Literally anything..."
              value={mentor.email}
              user={mentor}
              setUser={setMentor}
            />
          </Col>
          <Col xl={6}>
            <Select
              options={Majors}
              field="major"
              user={user}
              setUser={setUser}
              placeholder="Major"
            />
          </Col>
          <Col xl={6}>
            <Select
              options={Grades}
              field="grade"
              user={user}
              setUser={setUser}
              placeholder="Grade"
            />
          </Col>
          <Col xl={12} className="flex justify-center">
            <Button text="Submit" onClick={handleSubmit} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Mentor;
