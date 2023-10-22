import Textarea from "@/components/dynamic/form/Textarea";
import { useState } from "react";

describe("Textarea", () => {
  it("Typing...", () => {
    const Parent = () => {
      const [user, setUser] = useState({
        name: "",
      });
      return <Textarea title="name" user={user} setUser={setUser} />;
    };

    cy.mount(<Parent />);
    cy.get('[data-cy="name-textarea"]').type("John Doe");
    cy.get('[data-cy="name-textarea"]').should("have.value", "John Doe");
  });

  it("Clear", () => {
    const Parent = () => {
      const [user, setUser] = useState({
        name: "",
      });
      return <Textarea title="name" user={user} setUser={setUser} />;
    };

    cy.mount(<Parent />);
    cy.get('[data-cy="name-textarea"]').type("John Doe");
    cy.get('[data-cy="name-textarea"]').clear();
    cy.get('[data-cy="name-textarea"]').should("be.empty");
  });

  it("Backspace", () => {
    const Parent = () => {
      const [user, setUser] = useState({
        name: "",
      });
      return <Textarea title="name" user={user} setUser={setUser} />;
    };

    cy.mount(<Parent />);
    cy.get('[data-cy="name-textarea"]').type("John Doe");
    cy.get('[data-cy="name-textarea"]').type("{backspace}");
    cy.get('[data-cy="name-textarea"]').should("have.value", "John Do");
  });
});
