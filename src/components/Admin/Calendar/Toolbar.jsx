import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { labels } from "@/data/Calendar";
import Tag from "../Tag.jsx";

const CustomToolbar = (event) => {
  console.log(event);
  return (
    <Row className="p-0 m-0 pb-2">
      <Col xs={4} className="flex items-center p-0">
        <Tag
          onClick={() => event.onNavigate("PREV")}
          text="BACK"
          color="green"
          classes="mx-2"
        />
        <Tag
          onClick={() => event.onNavigate("NEXT")}
          text="NEXT"
          color="green"
          classes="mx-2"
        />
        <Tag
          onClick={() => event.onView("month")}
          text="MONTH"
          color="green"
          classes="mx-2"
        />
        <Tag
          onClick={() => event.onView("week")}
          text="WEEK"
          color="green"
          classes="mx-2"
        />
      </Col>
      <Col xs={4} className="flex justify-center items-center p-0">
        <p className="mb-0 text-3xl font-semibold">
          {event.date.toLocaleString("default", { month: "long" })}{" "}
          {event.date.getFullYear()}
        </p>
      </Col>
      <Col xs={4} className="p-0 flex justify-evenly items-center flex-wrap">
        {Object.entries(labels).map(([label, value], index) => (
          <Tag key={index} text={label} color={value.color} classes="my-1" />
        ))}
      </Col>
    </Row>
  );
};

export default CustomToolbar;
