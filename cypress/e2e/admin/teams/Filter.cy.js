import DATA from "../../../fixtures/teams.json";

const teams = DATA;

describe("Teams Filters", () => {
  beforeEach(() => {
    cy.login("admins");
    cy.visit("/");
    cy.wait("@session");
    cy.visit("/admin/teams");
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
      if (team.status === "disqualify")
        cy.get(`[data-cy="${team.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${team.uid}"]`).should("exist");
    });
  });

  it("Click Qualify", () => {
    cy.get('[data-cy="qualify-filter"]').click();
    teams.forEach((team) => {
      if (team.status === "qualify")
        cy.get(`[data-cy="${team.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${team.uid}"]`).should("exist");
    });
  });

  it("Click Pending", () => {
    cy.get('[data-cy="pending-filter"]').click();
    teams.forEach((team) => {
      if (team.status === "pending")
        cy.get(`[data-cy="${team.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${team.uid}"]`).should("exist");
    });
  });

  it("Click Winner", () => {
    cy.get('[data-cy="winner-filter"]').click();

    teams.forEach((team) => {
      if (team.status === "winner")
        cy.get(`[data-cy="${team.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${team.uid}"]`).should("exist");
    });
  });

  it("Click 2 Filters", () => {
    cy.get('[data-cy="qualify-filter"]').click();
    cy.get('[data-cy="disqualify-filter"]').click();
    teams.forEach((team) => {
      if (team.status === "qualify" || team.status === "disqualify")
        cy.get(`[data-cy="${team.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${team.uid}"]`).should("exist");
    });
  });
});
