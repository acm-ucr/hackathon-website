import response from "../../../fixtures/interests.json";

const interests = response.items;

describe("Interests Filters", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "interests",
    });
  });

  it("Default Filters", () => {
    cy.get('[data-cy="pending-filter"]')
      .get("div")
      .should("have.class", "bg-hackathon-blue-100", "text-white");
    cy.get('[data-cy="accepted-filter"]')
      .get("div")
      .should("have.class", "bg-hackathon-blue-100", "text-white");
  });

  it("Click Filters", () => {
    cy.get('[data-cy="pending-filter"]').click();
    cy.get('[data-cy="pending-filter"]')
      .get("div")
      .should("have.class", "text-hackathon-blue-100", "bg-white");
    cy.get('[data-cy="accepted-filter"]').click();
    cy.get('[data-cy="accepted-filter"]')
      .get("div")
      .should("have.class", "text-hackathon-blue-100", "bg-white");
  });

  it("Click Pending", () => {
    cy.get('[data-cy="pending-filter"]').click();
    interests.forEach((interest) => {
      if (interest.status === 0)
        cy.get(`[data-cy="${interest.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${interest.uid}"]`).should("exist");
    });
  });

  it("Click Accepted", () => {
    cy.get('[data-cy="accepted-filter"]').click();
    interests.forEach((interest) => {
      if (interest.status === 1)
        cy.get(`[data-cy="${interest.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${interest.uid}"]`).should("exist");
    });
  });

  it("Click 2 Filters", () => {
    cy.get('[data-cy="accepted-filter"]').click();
    cy.get('[data-cy="pending-filter"]').click();
    interests.forEach((interest) => {
      if (interest.status === 1 || interest.status === 0)
        cy.get(`[data-cy="${interest.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${interest.uid}"]`).should("exist");
    });
  });
});
