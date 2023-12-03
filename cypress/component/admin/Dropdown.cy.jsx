import Dropdown from "@/components/dynamic/admin/services/Dropdown";
import { useState } from "react";
import mockevents from "../../fixtures/events.json";

describe("Dropdown", () => {
  it("Default", () => {
    const Parent = () => {
      const [event, setEvent] = useState(mockevents.events[0]);
      const [events, setEvents] = useState(mockevents.events);

      return (
        <Dropdown
          option={event}
          setOption={setEvent}
          options={events}
          setOptions={setEvents}
          empty="haha"
        />
      );
    };

    cy.mount(<Parent />);

    cy.get('[data-cy="dropdown"]')
      .find('[data-cy="dropdown-selected"]')
      .should("have.class", "bg-hackathon-gray-100");
  });

  it("Dropdown Arrow", () => {
    const Parent = () => {
      const [event, setEvent] = useState(mockevents.events[0]);
      const [events, setEvents] = useState(mockevents.events);

      return (
        <Dropdown
          option={event}
          setOption={setEvent}
          options={events}
          setOptions={setEvents}
          empty="haha"
        />
      );
    };

    cy.mount(<Parent />);
    cy.get('[data-cy="dropdown"]')
      .find('[data-cy="dropdown-selected"]')
      .find('[data-cy="dropdown-arrow"]')
      .click();
    cy.get('[data-cy="dropdown"]')
      .find('[data-cy="dropdown-selected"]')
      .find('[data-cy="dropdown-arrow"]')
      .should("have.class", "rotate-180");
  });

  it("Select Dropdown Option", () => {
    const Parent = () => {
      const [event, setEvent] = useState(mockevents.events[0]);
      const [events, setEvents] = useState(mockevents.events);

      return (
        <Dropdown
          option={event}
          setOption={setEvent}
          options={events}
          setOptions={setEvents}
          empty="haha"
        />
      );
    };

    cy.mount(<Parent />);
    cy.get('[data-cy="dropdown-arrow"]').click();
    cy.get('[data-cy="dropdown-option-0"]').click();
    cy.get('[data-cy="dropdown-selected"]').should(
      "contain",
      "GitHub Workshop"
    );
  });

  it("Input Test - Typing + Filtering", () => {
    const Parent = () => {
      const [event, setEvent] = useState(mockevents.events[0]);
      const [events, setEvents] = useState(mockevents.events);

      return (
        <Dropdown
          option={event}
          setOption={setEvent}
          options={events}
          setOptions={setEvents}
          empty="haha"
        />
      );
    };

    cy.mount(<Parent />);
    cy.get('[data-cy="dropdown-arrow"]').click();
    cy.get('[data-cy="dropdown-input"]').should("have.value", "");
    cy.get('[data-cy="dropdown-input"]').type(mockevents.events[2].name);
    cy.get('[data-cy="dropdown-option-0"]').should(
      "contain",
      mockevents.events[2].name
    );
  });
});
