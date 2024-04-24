import Textarea from "@/components/admin/services/Textarea";
import { useState } from "react";

describe("Textarea", () => {
  it("Typing...", () => {
    const Parent = () => {
      const [object, setObject] = useState({
        name: "",
      });
      return <Textarea label="name" object={object} setObject={setObject} />;
    };

    cy.mount(<Parent />);
    cy.get('[data-cy="name-textarea"]').type("John Doe");
    cy.get('[data-cy="name-textarea"]').contains("John Doe");
  });

  it("Clear", () => {
    const Parent = () => {
      const [object, setObject] = useState({
        name: "",
      });
      return <Textarea label="name" object={object} setObject={setObject} />;
    };

    cy.mount(<Parent />);
    cy.get('[data-cy="name-textarea"]').type("John Doe");
    cy.get('[data-cy="name-textarea"]').clear();
    cy.get('[data-cy="name-textarea"]').should("be.empty");
  });

  it("Backspace", () => {
    const Parent = () => {
      const [object, setObject] = useState({
        name: "",
      });
      return <Textarea label="name" object={object} setObject={setObject} />;
    };

    cy.mount(<Parent />);
    cy.get('[data-cy="name-textarea"]').type("John Doe");
    cy.get('[data-cy="name-textarea"]').type("{backspace}");
    cy.get('[data-cy="name-textarea"]').contains("John Do");
  });
});
