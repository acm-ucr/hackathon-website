"use client";

import { useState } from "react";
import Select from "@/components/Select";
import { Shirts } from "@/data/Register";
import Radio from "@/components/Radio";
import Checkbox from "@/components/Checkbox";
import Input from "@/components/Input";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "@/components/Button";
import Upload from "./Upload";

const Judge = () => {
  const [judge, setJudge] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
    shirt: "",
    title: "",
  });

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
    console.log(judge);
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
        JUDGE APPLICATION
      </div>
      <div className="flex flex-col w-1/3 p-3 bg-white rounded-b-xl">
        <Row className="flex justify-center p-0 m-0">
          <Col xl={12}>
            Hello! Rose Hack is coming January 14-15, 2023. Thank you for your
            interest in Rose Hack, UC Riverside’s women-centric hackathon
            founded by the female leaders of SWE and WINC!Volunteers are
            essential to our hackathon in helping run the entire event.
            Responsibilities include helping set up, tech support, clean up,
            distributing swag, etc. Meals are also provided during breakfast,
            lunch, and dinner times. If you are interested in joining the Rose
            Hack Team as a volunteer, please fill out this quick interest form
            below!
            <br />
            <br />
            We also want to note that if you are volunteering at Rose Hack, you
            are unable to participate as a hacker as well. If you have any other
            questions please feel free to contact us on our socials or email us
            at rosehackucr@gmail.com! :)
          </Col>
          <Col xl={6}>
            <Input
              name="first"
              type="text"
              title="First Name"
              placeholder="John"
              value={judge.first}
              maxLength={50}
              user={judge}
              setUser={setJudge}
            />
          </Col>
          <Col xl={6}>
            <Input
              name="last"
              type="text"
              title="Last Name"
              placeholder="Doe"
              value={judge.last}
              maxLength={50}
              user={judge}
              setUser={setJudge}
            />
          </Col>
          <Col xl={6}>
            <Input
              name="phone"
              type="phone"
              title="Phone Number"
              placeholder="123 456 7890"
              value={judge.phone}
              maxLength={50}
              user={judge}
              setUser={setJudge}
            />
          </Col>
          <Col xl={6}>
            <Input
              name="email"
              type="email"
              title="Email Address"
              placeholder="john_doe@gmail.com"
              value={judge.email}
              maxLength={50}
              user={judge}
              setUser={setJudge}
            />
          </Col>
          <Col xl={12}>
            <Radio
              text="Shirt Size"
              options={Shirts}
              field="shirt"
              user={judge}
              setUser={setJudge}
            />
          </Col>
          <Col xl={12}>
            <Select
              title="Affiliation"
              options={["Student", "Professor", "Industry"]}
              field="major"
              user={judge}
              setUser={setJudge}
              placeholder="Student"
            />
          </Col>
          <Col xl={12}>
            <Input
              name="title"
              type="text"
              title="Title"
              placeholder="Graduate Student"
              value={judge.title}
              user={judge}
              setUser={setJudge}
            />
          </Col>
          <Col xl={12}>
            <Upload
              field="photo"
              user={judge}
              setUser={setJudge}
              text="Upload Photo"
              maxSize={[1, "MB"]}
              types={["png", "jpg", "jpeg"]}
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

export default Judge;
