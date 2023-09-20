import DATA from "../../../fixtures/teams.json";

const teams = DATA.teams;
const five = teams.slice(0, 5);

describe("Teams Actions", () => {
  beforeEach(() => {
    cy.login("admin");
    cy.visit("/");
    cy.wait("@session");
    cy.visit("/admin/teams");
  });

  it("Qualify First 5 Entries", () => {
    five.forEach((team) =>
      cy.get(`[data-cy="${team.uid}"]`).find('[data-cy="checkbox"]').click()
    );
    cy.get('[data-cy="toolbar"]').find('[data-cy="qualify-tag"]').click();

    five.forEach((team) =>
      cy
        .get(`[data-cy="${team.uid}"]`)
        .find('[data-cy="qualify-tag"]')
        .should("exist")
    );
  });

  it("Disqualify First 5 Entries", () => {
    five.forEach((team) =>
      cy.get(`[data-cy="${team.uid}"]`).find('[data-cy="checkbox"]').click()
    );
    cy.get('[data-cy="toolbar"]').find('[data-cy="disqualify-tag"]').click();

    five.forEach((team) =>
      cy
        .get(`[data-cy="${team.uid}"]`)
        .find('[data-cy="disqualify-tag"]')
        .should("exist")
    );
  });

  it("Win First 5 Entries", () => {
    five.forEach((team) =>
      cy.get(`[data-cy="${team.uid}"]`).find('[data-cy="checkbox"]').click()
    );
    cy.get('[data-cy="toolbar"]').find('[data-cy="winner-tag"]').click();

    five.forEach((team) =>
      cy
        .get(`[data-cy="${team.uid}"]`)
        .find('[data-cy="winner-tag"]')
        .should("exist")
    );
  });

  it("Pending First 5 Entries", () => {
    five.forEach((team) =>
      cy.get(`[data-cy="${team.uid}"]`).find('[data-cy="checkbox"]').click()
    );
    cy.get('[data-cy="toolbar"]').find('[data-cy="pending-tag"]').click();

    five.forEach((team) =>
      cy
        .get(`[data-cy="${team.uid}"]`)
        .find('[data-cy="pending-tag"]')
        .should("exist")
    );
  });

  it("Delete First 5 Entries", () => {
    five.forEach((team) =>
      cy.get(`[data-cy="${team.uid}"]`).find('[data-cy="checkbox"]').click()
    );
    cy.get('[data-cy="toolbar"]').find('[data-cy="delete"]').click();
    cy.get('[data-cy="confirm-button"]').click();

    five.forEach((team) =>
      cy.get(`[data-cy="${team.uid}"]`).should("not.exist")
    );
  });
});
