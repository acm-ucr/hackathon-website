import Checkbox from "@/components/Checkbox";
import { mount } from "cypress-react-unit-test";

describe("Checkbox", () => {
  it("Toggle OFF", () => {
    const toggle = false;

    mount(<Checkbox toggle={toggle} />);

    cy.get('[data-cy="checkbox"]').should("exist");
    cy.get('[data-cy="checkmark"]').should("exist");
    cy.get('[data-cy="checkmark"]').should("have.class", "text-hackathon-gray");
    cy.get('[data-cy="checkbox"]').should("have.class", "bg-hackathon-gray");
  });

  it("toggle on", () => {
    let toggle = false;

    const onClick = () => {
      toggle = !toggle;
    };

    mount(<Checkbox toggle={toggle} onClick={onClick} />);

    cy.get('[data-cy="checkbox"]').click();
    cy.get('[data-cy="checkbox"]').should(
      "have.class",
      "bg-hackathon-blue-100"
    );
    cy.get('[data-cy="checkmark"]').should("have.class", "text-white");
  });
});
