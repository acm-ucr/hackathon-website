import Dropdown from "@/components/dynamic/admin/services/DropDown";
import { useState } from "react";
import mockevents from "../../fixtures/Events.json";

describe("Dropdown", () => {
  it("Default", () => {
    const Parent = () => {
      const [toggle, setToggle] = useState(false);

      const onClick = () => {
        setToggle(!toggle);
      };

      return <Dropdown toggle={toggle} onClick={onClick} />;
    };

    cy.mount(<Parent />);

    cy.get('[data-cy="dropdown"]').should("have.class", "bg-white");
  });

  it("Dropdown Arrow", () => {
    const Parent = () => {
      const [toggle, setToggle] = useState(false);
      const [show, setShow] = useState(false);
      const [event, setEvent] = useState("No Event Selected");
      const [events, setEvents] = useState(mockevents);

      const onClick = () => {
        setToggle(!toggle);
      };

      return (
        <Dropdown
          onToggle={() => setShow(!show)}
          show={show}
          autoClose={true}
          option={event}
          setOption={setEvent}
          options={events}
          setOptions={setEvents}
          onClick={onClick}
        />
      );
    };

    cy.mount(<Parent />);
    cy.get('[data-cy="dropdown-arrow"]').click();
    cy.get('[data-cy="dropdown-arrow"]').should("have.class", "rotate-180");
  });

  it("Select Dropdown Option", () => {
    const Parent = () => {
      const [toggle, setToggle] = useState(false);
      const [show, setShow] = useState(false);
      const [event, setEvent] = useState("No Event Selected");
      const [events, setEvents] = useState(mockevents);

      const onClick = () => {
        setToggle(!toggle);
      };

      return (
        <Dropdown
          onToggle={() => setShow(!show)}
          show={show}
          autoClose={true}
          option={event}
          setOption={setEvent}
          options={events}
          setOptions={setEvents}
          onClick={onClick}
        />
      );
    };

    cy.mount(<Parent />);
    cy.get('[data-cy="dropdown-arrow"]').click();
    cy.get('[data-cy="dropdown-option-0"]').click();
    cy.get('[data-cy="dropdown-selected"]').should("contain", "Participant");
  });

  it("Input Test - Typing + Filtering", () => {
    const Parent = () => {
      const [toggle, setToggle] = useState(false);
      const [show, setShow] = useState(false);
      const [event, setEvent] = useState("No Event Selected");
      const [events, setEvents] = useState(mockevents);
      const [value, setValue] = useState("");

      const onClick = () => {
        setToggle(!toggle);
        setValue(value);
      };

      return (
        <Dropdown
          onToggle={() => setShow(!show)}
          show={show}
          autoClose={true}
          option={event}
          setOption={setEvent}
          options={events}
          setOptions={setEvents}
          onClick={onClick}
          value={value}
        />
      );
    };

    cy.mount(<Parent />);
    cy.get('[data-cy="dropdown-arrow"]').click();
    cy.get('[data-cy="dropdown-input"]').should("have.value", "");
    cy.get('[data-cy="dropdown-input"]').type("Data");
    cy.get('[data-cy="dropdown-option-0"]').should("contain", "Data Science");
  });
});
