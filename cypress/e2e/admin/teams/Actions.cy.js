import { teamList } from "../../../../src/data/mock/Teams";

const firstFive = teamList.slice(0, 5);

describe("Teams Actions", () => {
  beforeEach(() => {
    cy.login("admin");
    cy.visit("/");
    cy.wait("@session");
    cy.visit("/admin/teams");
  });

  it("Qualify First Five Entries", () => {
    firstFive.forEach((team) =>
      cy.get(`[data-cy="${team.uid}"]`).find('[data-cy="checkbox"]').click()
    );
    cy.get('[data-cy="toolbar"]').find('[data-cy="qualify-tag"]').click();

    firstFive.forEach((team) =>
      cy
        .get(`[data-cy="${team.uid}"]`)
        .find('[data-cy="qualify-tag"]')
        .should("exist")
    );
  });

  it("Disqualify First Five Entries", () => {
    firstFive.forEach((team) =>
      cy.get(`[data-cy="${team.uid}"]`).find('[data-cy="checkbox"]').click()
    );
    cy.get('[data-cy="toolbar"]').find('[data-cy="disqualify-tag"]').click();

    firstFive.forEach((team) =>
      cy
        .get(`[data-cy="${team.uid}"]`)
        .find('[data-cy="disqualify-tag"]')
        .should("exist")
    );
  });

  it("Win First Five Entries", () => {
    firstFive.forEach((team) =>
      cy.get(`[data-cy="${team.uid}"]`).find('[data-cy="checkbox"]').click()
    );
    cy.get('[data-cy="toolbar"]').find('[data-cy="winner-tag"]').click();

    firstFive.forEach((team) =>
      cy
        .get(`[data-cy="${team.uid}"]`)
        .find('[data-cy="winner-tag"]')
        .should("exist")
    );
  });

  it("Pending First Five Entries", () => {
    firstFive.forEach((team) =>
      cy.get(`[data-cy="${team.uid}"]`).find('[data-cy="checkbox"]').click()
    );
    cy.get('[data-cy="toolbar"]').find('[data-cy="pending-tag"]').click();

    firstFive.forEach((team) =>
      cy
        .get(`[data-cy="${team.uid}"]`)
        .find('[data-cy="pending-tag"]')
        .should("exist")
    );
  });

  it("Delete First Five Entries", () => {
    firstFive.forEach((team) =>
      cy.get(`[data-cy="${team.uid}"]`).find('[data-cy="checkbox"]').click()
    );
    cy.get('[data-cy="toolbar"]').find('[data-cy="delete"]').click();
    cy.get('[data-cy="confirm-button"]').click();

    firstFive.forEach((team) =>
      cy.get(`[data-cy="${team.uid}"]`).should("not.exist")
    );
  });
});
