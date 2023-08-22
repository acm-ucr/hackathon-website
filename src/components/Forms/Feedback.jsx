"use client";

import React, { useState } from "react";
import Input from "@/components/Input";
import { Row, Col } from "react-bootstrap";
import Button from "@/components/Forms/Button";
import { Helper } from "@/data/User";

const Feedback = () => {
  const [feedback, setFeedback] = useState(Helper);

  const handleSubmit = () => {
    console.log(feedback);
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
              name="question1"
              type="text"
              title="What was most helpful about the event?"
              placeholder="Workshops, team collaboration, mentorship..."
              value={feedback.question1}
              maxLength={300}
              user={feedback}
              setUser={setFeedback}
            />
          </Col>
          <Col xl={6}>
            <Input
              name="question2"
              type="text"
              title="Was there anything that you would have liked to see?"
              placeholder=""
              value={feedback.question2}
              maxLength={300}
              user={feedback}
              setUser={setFeedback}
            />
          </Col>
          <Col xl={6}>
            <Input
              name="question3"
              type="text"
              title="Was there anything that you did not find beneficial about the hackathon?"
              placeholder=""
              value={feedback.question3}
              maxLength={300}
              user={feedback}
              setUser={setFeedback}
            />
          </Col>
          <Col xl={6}>
            <Input
              name="question4"
              type="text"
              title="How would you rate the hackathon?"
              placeholder="From 1 - 10"
              value={feedback.question4}
              maxLength={300}
              user={feedback}
              setUser={setFeedback}
            />
          </Col>
          <Col xl={6}>
            <Input
              name="question5"
              type="text"
              title="How did you find the event?"
              placeholder="Instagram, friends, etc"
              value={feedback.question5}
              maxLength={300}
              user={feedback}
              setUser={setFeedback}
            />
          </Col>
          <Col xl={6}>
            <Input
              name="question6"
              type="text"
              title="Is there anything else you'd like to let us know?"
              placeholder="Literally anything..."
              value={feedback.question6}
              maxLength={300}
              user={feedback}
              setUser={setFeedback}
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

export default Feedback;
