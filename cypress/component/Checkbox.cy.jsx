import Checkbox from "@/components/Checkbox";
import { useState } from "react";

describe("Checkbox", () => {
  it("Toggle OFF", () => {
    const toggle = false;

    cy.mount(<Checkbox toggle={toggle} />);

    cy.get('[data-cy="checkbox-bg"]').should("exist");
    cy.get('[data-cy="checkmark"]').should("exist");
    cy.get('[data-cy="checkmark"]').should(
      "have.class",
      "text-hackathon-gray-100"
    );
    cy.get('[data-cy="checkbox-bg"]').should(
      "have.class",
      "bg-hackathon-gray-100"
    );
  });

  it("Toggle ON", () => {
    const Parent = () => {
      const [toggle, setToggle] = useState(false);

      const onClick = () => {
        setToggle(!toggle);
      };

      return <Checkbox toggle={toggle} onClick={onClick} />;
    };

    cy.mount(<Parent />);

    cy.get('[data-cy="checkbox-bg"]').click();
    cy.get('[data-cy="checkbox-bg"]').should(
      "have.class",
      "bg-hackathon-blue-100"
    );
    cy.get('[data-cy="checkmark"]').should("have.class", "text-white");
  });
});
