import Input from "@/components/dynamic/admin/Input";
import { useState } from "react";

describe("Input", () => {
  it("Placeholder", () => {
    const Parent = () => {
      const [object, setObject] = useState({
        name: "",
      });
      return (
        <Input
          label="name"
          object={object}
          setObject={setObject}
          placeholder="subject"
        />
      );
    };

    cy.mount(<Parent />);
    cy.get('[data-cy="name-input"]').should(
      "have.attr",
      "placeholder",
      "subject"
    );
  });

  it("Typing...", () => {
    const Parent = () => {
      const [object, setObject] = useState({
        name: "",
      });
      return (
        <Input label="name" type="text" object={object} setObject={setObject} />
      );
    };

    cy.mount(<Parent />);
    cy.get('[data-cy="name-input"]').should("have.value", "");
    cy.get('[data-cy="name-input"]').type("John Doe");
    cy.get('[data-cy="name-input"]').should("have.value", "John Doe");
  });

  it("Backspace", () => {
    const Parent = () => {
      const [object, setObject] = useState({
        name: "",
      });
      return <Input label="name" object={object} setObject={setObject} />;
    };

    cy.mount(<Parent />);
    cy.get('[data-cy="name-input"]').type("John Doe");
    cy.get('[data-cy="name-input"]').type("{backspace}");
    cy.get('[data-cy="name-input"]').should("have.value", "John Do");
  });

  it("Clear Button", () => {
    const Parent = () => {
      const [object, setObject] = useState({
        name: "",
      });
      return (
        <Input
          label="name"
          object={object}
          setObject={setObject}
          clear={true}
        />
      );
    };

    cy.mount(<Parent />);
    cy.get('[data-cy="name-input"]').type("John Doe");
    cy.get('[data-cy="name-clear-input"]').click();
    cy.get('[data-cy="name-input"]').should("be.empty");
  });

  it("Select All Clear", () => {
    const Parent = () => {
      const [object, setObject] = useState({
        name: "",
      });
      return <Input label="name" object={object} setObject={setObject} />;
    };

    cy.mount(<Parent />);
    cy.get('[data-cy="name-input"]').type("John Doe");
    cy.get('[data-cy="name-input"]').clear();
    cy.get('[data-cy="name-input"]').should("be.empty");
  });
});
