import Checkbox from "@/components/Checkbox";
import { mount } from "cypress-react-unit-test";
import { useState } from "react";

describe("Checkbox", () => {
  it("Toggle OFF", () => {
    const toggle = false;

    mount(<Checkbox toggle={toggle} />);

    cy.get('[data-cy="checkbox"]').should("exist");
    cy.get('[data-cy="checkmark"]').should("exist");
    cy.get('[data-cy="checkmark"]').should("have.class", "text-hackathon-gray");
    cy.get('[data-cy="checkbox"]').should("have.class", "bg-hackathon-gray");
  });

  it("Toggle ON", () => {
    const Parent = () => {
      const [toggle, setToggle] = useState(false);

      const onClick = () => {
        setToggle(!toggle);
      };

      return <Checkbox toggle={toggle} onClick={onClick} />;
    };

    mount(<Parent />);

    cy.get('[data-cy="checkbox"]').click();
    cy.get('[data-cy="checkbox"]').should(
      "have.class",
      "bg-hackathon-blue-100"
    );
    cy.get('[data-cy="checkmark"]').should("have.class", "text-white");
  });
});
