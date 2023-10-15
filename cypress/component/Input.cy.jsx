import Input from "@/components/dynamic/Input";
import { useState } from "react";

describe("Input", () => {
  it("Placeholder", () => {
    const Parent = () => {
      const [user, setUser] = useState({ name: "" });
      return (
        <Input
          name="first"
          type="text"
          title="First Name"
          placeholder="John"
          user={user}
          setUser={setUser}
        />
      );
    };

    cy.mount(<Parent />);
    cy.get('[data-cy="first-input"]').should(
      "have.attr",
      "placeholder",
      "John"
    );
  });

  it("Typing...", () => {
    const Parent = () => {
      const [user, setUser] = useState({ name: "" });
      return (
        <Input
          name="first"
          type="text"
          title="First Name"
          placeholder=""
          maxLength={50}
          value={user.first}
          user={user}
          setUser={setUser}
        />
      );
    };

    cy.mount(<Parent />);
    cy.get('[data-cy="first-input"]').should("have.value", "");
    cy.get('[data-cy="first-input"]').type("John Doe");
    cy.get('[data-cy="first-input"]').should("have.value", "John Doe");
  });

  it("Backspace", () => {
    const Parent = () => {
      const [user, setUser] = useState({ name: "" });
      return (
        <Input
          name="first"
          type="text"
          title="First Name"
          placeholder=""
          maxLength={50}
          value={user.first}
          user={user}
          setUser={setUser}
        />
      );
    };

    cy.mount(<Parent />);
    cy.get('[data-cy="first-input"]').should("have.value", "");
    cy.get('[data-cy="first-input"]').type("John Doe");
    cy.get('[data-cy="first-input"]').type("{backspace}");
    cy.get('[data-cy="first-input"]').should("have.value", "John Do");
  });

  it("Select all clear", () => {
    const Parent = () => {
      const [user, setUser] = useState({ name: "" });
      return (
        <Input
          name="first"
          type="text"
          title="First Name"
          placeholder=""
          maxLength={50}
          value={user.first}
          user={user}
          setUser={setUser}
        />
      );
    };

    cy.mount(<Parent />);
    cy.get('[data-cy="first-input"]').should("have.value", "");
    cy.get('[data-cy="first-input"]').type("John Doe");
    cy.get('[data-cy="first-input"]').clear();
    cy.get('[data-cy="first-input"]').should("be.empty");
  });
});
