import judges from "../../../fixtures/judges.json";

const five = judges.slice(0, 5);

describe("Judges Actions", () => {
  beforeEach(() => {
    cy.login("admins");
    cy.visit("/");
    cy.wait("@session");
    cy.visit("/admin/judges");
  });

  it("Confirm First 5 Entries", () => {
    five.forEach((judge) =>
      cy.get(`[data-cy="${judge.uid}"]`).find('[data-cy="checkbox"]').click()
    );
    cy.get('[data-cy="toolbar"]').find('[data-cy="confirm-tag"]').click();

    five.forEach((judge) =>
      cy
        .get(`[data-cy="${judge.uid}"]`)
        .find('[data-cy="confirm-tag"]')
        .should("exist")
    );
  });

  it("Not Attending First 5 Entries", () => {
    five.forEach((judge) =>
      cy.get(`[data-cy="${judge.uid}"]`).find('[data-cy="checkbox"]').click()
    );
    cy.get('[data-cy="toolbar"]').find('[data-cy="not attending-tag"]').click();

    five.forEach((judge) =>
      cy
        .get(`[data-cy="${judge.uid}"]`)
        .find('[data-cy="not attending-tag"]')
        .should("exist")
    );
  });

  it("Pending First 5 Entries", () => {
    five.forEach((judge) =>
      cy.get(`[data-cy="${judge.uid}"]`).find('[data-cy="checkbox"]').click()
    );
    cy.get('[data-cy="toolbar"]').find('[data-cy="pending-tag"]').click();

    five.forEach((judge) =>
      cy
        .get(`[data-cy="${judge.uid}"]`)
        .find('[data-cy="pending-tag"]')
        .should("exist")
    );
  });

  it("Delete First 5 Entries", () => {
    five.forEach((judge) =>
      cy.get(`[data-cy="${judge.uid}"]`).find('[data-cy="checkbox"]').click()
    );
    cy.get('[data-cy="toolbar"]').find('[data-cy="delete"]').click();
    cy.get('[data-cy="confirm-button"]').click();

    five.forEach((judge) =>
      cy.get(`[data-cy="${judge.uid}"]`).should("not.exist")
    );
  });
});
