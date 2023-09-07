import { volunteerList } from "../../../../src/data/mock/Volunteers";

const five = volunteerList.slice(0, 5);

describe("Volunteers Actions", () => {
  beforeEach(() => {
    cy.login("admin");
    cy.visit("/");
    cy.wait("@session");
    cy.visit("/admin/volunteers");
  });

  it("Confirm First Five Entries", () => {
    five.forEach((volunteer) =>
      cy
        .get(`[data-cy="${volunteer.uid}"]`)
        .find('[data-cy="checkbox"]')
        .click()
    );
    cy.get('[data-cy="toolbar"]').find('[data-cy="confirm-tag"]').click();

    five.forEach((volunteer) =>
      cy
        .get(`[data-cy="${volunteer.uid}"]`)
        .find('[data-cy="confirm-tag"]')
        .should("exist")
    );
  });

  it("Not Attending First Five Entries", () => {
    five.forEach((volunteer) =>
      cy
        .get(`[data-cy="${volunteer.uid}"]`)
        .find('[data-cy="checkbox"]')
        .click()
    );
    cy.get('[data-cy="toolbar"]').find('[data-cy="not attending-tag"]').click();

    five.forEach((volunteer) =>
      cy
        .get(`[data-cy="${volunteer.uid}"]`)
        .find('[data-cy="not attending-tag"]')
        .should("exist")
    );
  });

  it("Pending First Five Entries", () => {
    five.forEach((volunteer) =>
      cy
        .get(`[data-cy="${volunteer.uid}"]`)
        .find('[data-cy="checkbox"]')
        .click()
    );
    cy.get('[data-cy="toolbar"]').find('[data-cy="pending-tag"]').click();

    five.forEach((volunteer) =>
      cy
        .get(`[data-cy="${volunteer.uid}"]`)
        .find('[data-cy="pending-tag"]')
        .should("exist")
    );
  });

  it("Delete First Five Entries", () => {
    five.forEach((volunteer) =>
      cy
        .get(`[data-cy="${volunteer.uid}"]`)
        .find('[data-cy="checkbox"]')
        .click()
    );
    cy.get('[data-cy="toolbar"]').find('[data-cy="delete"]').click();
    cy.get('[data-cy="confirm-button"]').click();

    five.forEach((volunteer) =>
      cy.get(`[data-cy="${volunteer.uid}"]`).should("not.exist")
    );
  });
});
