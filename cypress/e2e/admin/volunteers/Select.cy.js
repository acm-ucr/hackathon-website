import volunteers from "../../../fixtures/Volunteers.json";

const five = volunteers.slice(0, 5);

describe("Volunteers Select", () => {
  beforeEach(() => {
    cy.login("admin");
    cy.visit("/");
    cy.wait("@session");
    cy.visit("/admin/teams");
  });

  it("Select All", () => {
    cy.get('[data-cy="select-all"]').click();
    volunteers.forEach((volunteer) => {
      cy.get(`[data-cy="${volunteer.uid}"]`).should(
        "have.class",
        "bg-green-100"
      );
    });
  });

  it("Select First 5 Entries", () => {
    five.map((volunteer) =>
      cy
        .get(`[data-cy="${volunteer.uid}"]`)
        .find('[data-cy="checkbox"]')
        .click()
    );
    volunteers.forEach((volunteer, index) => {
      if (index < 5)
        cy.get(`[data-cy="${volunteer.uid}"]`).should(
          "have.class",
          "bg-green-100"
        );
      else
        cy.get(`[data-cy="${volunteer.uid}"]`).should("have.class", "bg-white");
    });
  });
});
