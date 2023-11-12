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
      tag: "qualify",
      page: "teams",
    });

    five.forEach((team) =>
      cy
        .get(`[data-cy="${team.uid}"]`)
        .find('[data-cy="1-tag"]')
        .should("exist")
    );
  });

  it("Disqualify First 5 Entries", () => {
    five.forEach((team) =>
      cy.get(`[data-cy="${team.uid}"]`).find('[data-cy="checkbox"]').click()
    );

    cy.action({
      tag: "disqualify",
      page: "teams",
    });

    five.forEach((team) =>
      cy
        .get(`[data-cy="${team.uid}"]`)
        .find('[data-cy="-1-tag"]')
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
