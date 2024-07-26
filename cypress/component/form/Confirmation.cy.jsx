import Confirmation from "@/components/form/form/Confirmation";

describe("Confirmation", () => {
  it("should render and display correct message", () => {
    const expectedText =
      "Thank you for filling out the application form. Please watch out for an email with an application status update.";

    cy.mount(<Confirmation />);
    cy.get('[data-cy="confirmation-message"]').should("exist");
    cy.get('[data-cy="confirmation-message"]').should(
      "have.text",
      expectedText,
    );
  });
});
