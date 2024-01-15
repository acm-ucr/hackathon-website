import Select from "@/components/dynamic/Select";
import { useState } from "react";

describe("Select", () => {
  const options = ["Option A", "Option B", "Option C"];
  const placeholder = "Select an option";
  const title = "Title";

  it("Renders", () => {
    const Parent = () => {
      const [user, setUser] = useState({ name: "" });

      return (
        <Select
          items={options}
          user={user}
          field="name"
          setUser={setUser}
          placeholder={placeholder}
          title={title}
        />
      );
    };

    cy.mount(<Parent />);

    cy.get('[data-cy="select-toggle"]').should("exist");
    cy.get('[data-cy="select-menu"]').should("not.exist");
  });

  it("Show Dropdown", () => {
    const Parent = () => {
      const [user, setUser] = useState({ name: "" });

      return (
        <Select
          items={options}
          user={user}
          field="name"
          setUser={setUser}
          placeholder={placeholder}
          title={title}
        />
      );
    };

    cy.mount(<Parent />);

    cy.get('[data-cy="select-toggle"]').click();
    cy.get('[data-cy="select-menu"]').should("be.visible");
  });
  it("Selects and Updates", () => {
    const Parent = () => {
      const [user, setUser] = useState({ name: "" });

      return (
        <Select
          items={options}
          user={user}
          field="name"
          setUser={setUser}
          placeholder={placeholder}
          title={title}
        />
      );
    };

    cy.mount(<Parent />);

    cy.get('[data-cy="select-toggle"]').click();

    const selectedOption = options[0];
    cy.get('[data-cy="select-menu"]').contains(selectedOption).click();

    cy.get('[data-cy="select-toggle"]').should("contain", selectedOption);

    cy.get('[data-cy="select-toggle"]').then(($toggle) => {
      const updatedUserName = $toggle.text().trim();
      expect(updatedUserName).to.equal(selectedOption);
    });
  });
});
