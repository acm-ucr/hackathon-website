"use client";
import { FaChevronDown } from "react-icons/fa6";
import { Accordion } from "react-bootstrap";
import { useState } from "react";

const Item = ({ question, answer, index }) => {
  const [state, setState] = useState(false);

  return (
    <Accordion.Item
      eventKey={index}
      className="!text-black bg-transparent !border-x-0 !border-t-0 !border-b-2"
    >
      <Accordion.Button
        className="after:!bg-none !text-black !bg-transparent !shadow-none flex justify-between w-full"
        onClick={() => setState(!state)}
      >
        <div className=" flex justify-start w-full font-semibold">
          {question}
        </div>
        <FaChevronDown
          className={`${
            state && "rotate-180"
          } duration-200 ml-2 text-xl lg:text-2xl`}
        />
      </Accordion.Button>
      {state && (
        <Accordion.Body className="!border-none py-4 font-semibold">
          {answer}
        </Accordion.Body>
      )}
    </Accordion.Item>
  );
};

export default Item;
