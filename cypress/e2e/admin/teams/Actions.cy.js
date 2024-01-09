import response from "../../../fixtures/teams.json";

const teams = response.items;
const five = teams.slice(0, 5);

describe("Teams Actions", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "teams",
    });
  });

  it("Qualify First 5 Entries", () => {
    five.forEach((team) =>
      cy.get(`[data-cy="${team.uid}"]`).find('[data-cy="checkbox"]').click()
    );

    cy.action({
      tag: "accept",
      page: "teams",
    });

    five.forEach((team) =>
      cy
        .get(`[data-cy="${team.uid}"]`)
        .find('[data-cy="accepted-tag"]')
        .should("exist")
    );
  });

  it("Disqualify First 5 Entries", () => {
    five.forEach((team) =>
      cy.get(`[data-cy="${team.uid}"]`).find('[data-cy="checkbox"]').click()
    );

    cy.action({
      tag: "reject",
      page: "teams",
    });

    five.forEach((team) =>
      cy
        .get(`[data-cy="${team.uid}"]`)
        .find('[data-cy="rejected-tag"]')
        .should("exist")
    );
  });

  it("Delete First 5 Entries", () => {
    five.forEach((team) =>
      cy.get(`[data-cy="${team.uid}"]`).find('[data-cy="checkbox"]').click()
    );

    cy.delete({
      page: "teams",
    });

    five.forEach((team) =>
      cy.get(`[data-cy="${team.uid}"]`).should("not.exist")
    );
  });
});
