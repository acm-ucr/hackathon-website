"use client";

import React, { useState } from "react";
import Select from "@/components/Select";
import { Majors, Grades, Genders, Shirts } from "@/data/Register";
import Radio from "@/components/Radio";
import Checkbox from "@/components/Checkbox";
import Input from "@/components/Input";
import { Row, Col } from "react-bootstrap";
import Button from "@/components/Forms/Button";
import { Helper } from "@/data/User";
import Textarea from "@/components/Forms/Textarea";

const Mentor = () => {
  const [mentor, setMentor] = useState(Helper);

  const [requirements, setRequirements] = useState({
    photography: {
      state: false,
      text: "I agree to photograph.",
    },
    inPerson: {
      state: false,
      text: "I understand that I will attend the event in person.",
    },
  });

  const handleSubmit = () => {
    console.log(mentor);
    console.log(requirements);
  };

  const handleRequirementsCheckbox = (key, value) => {
    setRequirements({
      ...requirements,
      [key]: { state: !value.state, text: value.text },
    });
  };

  return (
    <div className="w-full flex flex-col items-center font-poppins py-4">
      <div className="text-xl bg-hackathon-green-300 w-1/3 rounded-t-xl flex items-center justify-center p-3 font-semibold">
        MENTOR APPLICATION
      </div>
      <div className="flex flex-col w-1/3 p-3 bg-white rounded-b-xl">
        <Row className="flex justify-center p-0 m-0">
          <Col xl={12}>
            Hello! Rose Hack is coming January 14-15, 2023. Thank you for your
            interest in Rose Hack, UC Riverside’s women-centric hackathon
            founded by the female leaders of SWE and WINC!Mentors are essential
            to our hackathon in helping guide our hackers with their projects.
            Your experience and knowledge is valuable to those who need
            assistance during the event. You are welcome to join remotely and
            mentor over Discord/Zoom if that is convenient, but our event is
            purely in-person in terms of hacking. Meals are also provided during
            breakfast, lunch, and dinner times in person. If you are interested
            in joining the Rose Hack Team as a mentor, please fill out this
            quick interest form below!
            <br />
            <br />
            We also want to note that if you are mentoring at Rose Hack, you are
            unable to participate as a hacker as well. If you have any other
            questions please feel free to contact us on our socials or email us
            at rosehackucr@gmail.com! :)
          </Col>
          <Col xl={6}>
            <Input
              name="first"
              type="text"
              title="First Name"
              placeholder="John"
              value={mentor.first}
              user={mentor}
              setUser={setMentor}
            />
          </Col>
          <Col xl={6}>
            <Input
              name="last"
              type="text"
              title="Last Name"
              placeholder="Doe"
              value={mentor.last}
              user={mentor}
              setUser={setMentor}
            />
          </Col>
          <Col xl={6}>
            <Input
              name="phone"
              type="phone"
              title="Phone Number"
              placeholder="123 456 7890"
              value={mentor.phone}
              user={mentor}
              setUser={setMentor}
            />
          </Col>
          <Col xl={6}>
            <Input
              name="email"
              type="email"
              title="Email Address"
              placeholder="john_doe@gmail.com"
              value={mentor.email}
              user={mentor}
              setUser={setMentor}
            />
          </Col>
          <Col xl={12}>
            <Select
              title="Major"
              options={Majors}
              field="major"
              user={mentor}
              setUser={setMentor}
              placeholder="Computer Science"
            />
          </Col>
          <Col xl={12}>
            <Select
              title="Grade"
              options={Grades}
              field="grade"
              user={mentor}
              setUser={setMentor}
              placeholder="Undergraduate"
            />
          </Col>
          <Col xl={12}>
            <Radio
              text="Gender"
              options={Genders}
              field="gender"
              user={mentor}
              setUser={setMentor}
            />
          </Col>
          <Col xl={12}>
            <Radio
              text="Shirt Size"
              options={Shirts}
              field="shirt"
              user={mentor}
              setUser={setMentor}
            />
          </Col>
          <Col xl={12}>
            <Textarea
              name="response"
              type="email"
              title="What skills and experience can you bring as a mentor?"
              placeholder="I can bring..."
              value={mentor.response}
              user={mentor}
              setUser={setMentor}
            />
          </Col>
          <Col xl={12}>
            {Object.entries(requirements).map(([key, value], index) => (
              <Checkbox
                className="w-1/2"
                key={index}
                toggle={value.state}
                text={value.text}
                onClick={() => handleRequirementsCheckbox(key, value)}
                color="bg-hackathon-green-300"
              />
            ))}
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
