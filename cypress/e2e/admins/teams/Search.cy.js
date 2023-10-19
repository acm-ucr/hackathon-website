import response from "../../../fixtures/teams.json";

const teams = response.items;

describe("Team Search", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admins",
      page: "teams",
    });
  });

  it("No Search Results", () => {
    cy.get('[data-cy="toolbar"]').find('[data-cy="input-input"]').type("Meow");
    cy.get('[data-cy="toolbar"]').find("form").submit();
    cy.contains("No Teams Available");
  });

  it("Search For 1st Entry", () => {
    cy.get('[data-cy="toolbar"]')
      .find('[data-cy="input-input"]')
      .type(teams[0].name);
    cy.get('[data-cy="toolbar"]').find("form").submit();
    cy.get(`[data-cy="${teams[0].uid}"]`).should("exist");
  });

  it("Search For Multiple Entries", () => {
    cy.get('[data-cy="toolbar"]').find('[data-cy="input-input"]').type("teams");
    cy.get('[data-cy="toolbar"]').find("form").submit();
    teams.forEach((team) => {
      if (team.name.toLowerCase().includes("teams"))
        cy.get(`[data-cy="${team.uid}"]`).should("exist");
      else cy.get(`[data-cy="${team.uid}"]`).should("not.exist");
    });
  });
});
