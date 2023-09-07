import { volunteerList } from "../../../../src/data/mock/Volunteers";

const firstFive = volunteerList.slice(0, 5);

describe("Volunteers Actions", () => {
  beforeEach(() => {
    cy.login("admin");
    cy.visit("/");
    cy.wait("@session");
    cy.visit("/admin/volunteers");
  });

  it("Confirm First Five Entries", () => {
    firstFive.forEach((volunteer) =>
      cy
        .get(`[data-cy="${volunteer.uid}"]`)
        .find('[data-cy="checkbox"]')
        .click()
    );
    cy.get('[data-cy="toolbar"]').find('[data-cy="confirm-tag"]').click();

    firstFive.forEach((volunteer) =>
      cy
        .get(`[data-cy="${volunteer.uid}"]`)
        .find('[data-cy="confirm-tag"]')
        .should("exist")
    );
  });

  it("Not Attending First Five Entries", () => {
    firstFive.forEach((volunteer) =>
      cy
        .get(`[data-cy="${volunteer.uid}"]`)
        .find('[data-cy="checkbox"]')
        .click()
    );
    cy.get('[data-cy="toolbar"]').find('[data-cy="not attending-tag"]').click();

    firstFive.forEach((volunteer) =>
      cy
        .get(`[data-cy="${volunteer.uid}"]`)
        .find('[data-cy="not attending-tag"]')
        .should("exist")
    );
  });

  it("Pending First Five Entries", () => {
    firstFive.forEach((volunteer) =>
      cy
        .get(`[data-cy="${volunteer.uid}"]`)
        .find('[data-cy="checkbox"]')
        .click()
    );
    cy.get('[data-cy="toolbar"]').find('[data-cy="pending-tag"]').click();

    firstFive.forEach((volunteer) =>
      cy
        .get(`[data-cy="${volunteer.uid}"]`)
        .find('[data-cy="pending-tag"]')
        .should("exist")
    );
  });

  it("Delete First Five Entries", () => {
    firstFive.forEach((volunteer) =>
      cy
        .get(`[data-cy="${volunteer.uid}"]`)
        .find('[data-cy="checkbox"]')
        .click()
    );
    cy.get('[data-cy="toolbar"]').find('[data-cy="delete"]').click();
    cy.get('[data-cy="confirm-button"]').click();

    firstFive.forEach((volunteer) =>
      cy.get(`[data-cy="${volunteer.uid}"]`).should("not.exist")
    );
  });
});
