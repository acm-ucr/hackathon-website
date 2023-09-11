import teamList from "../../../fixtures/Teams.json";

describe("Team Search", () => {
  beforeEach(() => {
    cy.login("admin");
    cy.visit("/");
    cy.wait("@session");
    cy.visit("/admin/teams");
  });

  it("No Search Results", () => {
    cy.get('[data-cy="toolbar"]').find("input").type("Meow");
    cy.get('[data-cy="toolbar"]').find("form").submit();
    cy.contains("No Teams Available");
  });

  it("Search For 1st Entry", () => {
    cy.get('[data-cy="toolbar"]').find("input").type(teamList[0].name);
    cy.get('[data-cy="toolbar"]').find("form").submit();
    cy.get(`[data-cy="${teamList[0].uid}"]`).should("exist");
  });

  it("Search For multiple Entry", () => {
    cy.get('[data-cy="toolbar"]').find("input").type("team");
    cy.get('[data-cy="toolbar"]').find("form").submit();
    teamList.forEach((team) => {
      if (team.name.toLowerCase().includes("team"))
        cy.get(`[data-cy="${team.uid}"]`).should("exist");
      else cy.get(`[data-cy="${team.uid}"]`).should("not.exist");
    });
  });
});
