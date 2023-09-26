import response from "../../../fixtures/teams.json";

const teams = response.items;

describe("Teams Filters", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "teams",
    });
  });

  it("Default Filters", () => {
    cy.get('[data-cy="disqualify-filter"]')
      .get("div")
      .should("have.class", "bg-hackathon-blue-100", "text-white");
    cy.get('[data-cy="qualify-filter"]')
      .get("div")
      .should("have.class", "bg-hackathon-blue-100", "text-white");
    cy.get('[data-cy="pending-filter"]')
      .get("div")
      .should("have.class", "bg-hackathon-blue-100", "text-white");
    cy.get('[data-cy="winner-filter"]')
      .get("div")
      .should("have.class", "bg-hackathon-blue-100", "text-white");
  });

  it("Click Filters", () => {
    cy.get('[data-cy="disqualify-filter"]').click();
    cy.get('[data-cy="disqualify-filter"]')
      .get("div")
      .should("have.class", "text-hackathon-blue-100", "bg-white");
    cy.get('[data-cy="qualify-filter"]').click();
    cy.get('[data-cy="qualify-filter"]')
      .get("div")
      .should("have.class", "text-hackathon-blue-100", "bg-white");
    cy.get('[data-cy="pending-filter"]').click();
    cy.get('[data-cy="pending-filter"]')
      .get("div")
      .should("have.class", "text-hackathon-blue-100", "bg-white");
    cy.get('[data-cy="winner-filter"]').click();
    cy.get('[data-cy="winner-filter"]')
      .get("div")
      .should("have.class", "text-hackathon-blue-100", "bg-white");
  });

  it("Click Disqualify", () => {
    cy.get('[data-cy="disqualify-filter"]').click();
    teams.forEach((team) => {
      if (team.status.teams === "disqualify")
        cy.get(`[data-cy="${team.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${team.uid}"]`).should("exist");
    });
  });

  it("Click Qualify", () => {
    cy.get('[data-cy="qualify-filter"]').click();
    teams.forEach((team) => {
      if (team.status.teams === "qualify")
        cy.get(`[data-cy="${team.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${team.uid}"]`).should("exist");
    });
  });

  it("Click Pending", () => {
    cy.get('[data-cy="pending-filter"]').click();
    teams.forEach((team) => {
      if (team.status.teams === "pending")
        cy.get(`[data-cy="${team.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${team.uid}"]`).should("exist");
    });
  });

  it("Click Winner", () => {
    cy.get('[data-cy="winner-filter"]').click();

    teams.forEach((team) => {
      if (team.status.teams === "winner")
        cy.get(`[data-cy="${team.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${team.uid}"]`).should("exist");
    });
  });

  it("Click 2 Filters", () => {
    cy.get('[data-cy="qualify-filter"]').click();
    cy.get('[data-cy="disqualify-filter"]').click();
    teams.forEach((team) => {
      if (team.status.teams === "qualify" || team.status.teams === "disqualify")
        cy.get(`[data-cy="${team.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${team.uid}"]`).should("exist");
    });
  });
});
