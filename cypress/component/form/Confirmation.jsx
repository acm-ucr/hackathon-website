import React from "react";
import Confirmation from "@/components/form/form/Confirmation.jsx";

describe("Confirmation", () => {
  it("should render and display correct message", () => {
    const expectedText = "Thank you for applying!";

    cy.mount(<Confirmation message={expectedText} />);
    cy.get('[data-cy="confirmation-message"]').should("exist");
    cy.get('[data-cy="confirmation-message"]').should(
      "have.text",
      expectedText
    );
  });
});
