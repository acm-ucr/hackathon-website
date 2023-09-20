import vounteers from "../../../fixtures/volunteers.json";

const five = vounteers.slice(0, 5);

describe("Volunteers Actions", () => {
  beforeEach(() => {
    cy.login("admin");
    cy.visit("/");
    cy.wait("@session");
    cy.visit("/admin/volunteers");
  });

  it("Confirm First 5 Entries", () => {
    five.forEach((volunteer) =>
      cy.get(`[data-cy="${volunteer.uid}"]`).find('[data-cy="select"]').click()
    );
    cy.get('[data-cy="toolbar"]').find('[data-cy="confirm-tag"]').click();

    five.forEach((volunteer) =>
      cy
        .get(`[data-cy="${volunteer.uid}"]`)
        .find('[data-cy="confirm-tag"]')
        .should("exist")
    );
  });

  it("Not Attending First 5 Entries", () => {
    five.forEach((volunteer) =>
      cy.get(`[data-cy="${volunteer.uid}"]`).find('[data-cy="select"]').click()
    );
    cy.get('[data-cy="toolbar"]').find('[data-cy="not attending-tag"]').click();

    five.forEach((volunteer) =>
      cy
        .get(`[data-cy="${volunteer.uid}"]`)
        .find('[data-cy="not attending-tag"]')
        .should("exist")
    );
  });

  it("Pending First 5 Entries", () => {
    five.forEach((volunteer) =>
      cy.get(`[data-cy="${volunteer.uid}"]`).find('[data-cy="select"]').click()
    );
    cy.get('[data-cy="toolbar"]').find('[data-cy="pending-tag"]').click();

    five.forEach((volunteer) =>
      cy
        .get(`[data-cy="${volunteer.uid}"]`)
        .find('[data-cy="pending-tag"]')
        .should("exist")
    );
  });

  it("Delete First 5 Entries", () => {
    five.forEach((volunteer) =>
      cy.get(`[data-cy="${volunteer.uid}"]`).find('[data-cy="select"]').click()
    );
    cy.get('[data-cy="toolbar"]').find('[data-cy="delete"]').click();
    cy.get('[data-cy="confirm-button"]').click();

    five.forEach((volunteer) =>
      cy.get(`[data-cy="${volunteer.uid}"]`).should("not.exist")
    );
  });
});
