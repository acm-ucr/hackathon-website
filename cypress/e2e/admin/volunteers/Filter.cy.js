import volunteers from "../../../fixtures/volunteers.json";

describe("Volunteers Filters", () => {
  beforeEach(() => {
    cy.login("admin");
    cy.visit("/");
    cy.wait("@session");
    cy.visit("/admin/volunteers");
  });

  it("Default Filters", () => {
    cy.get('[data-cy="pending-filter"]')
      .get("div")
      .should("have.class", "bg-hackathon-blue-100", "text-white");
    cy.get('[data-cy="not attending-filter"]')
      .get("div")
      .should("have.class", "bg-hackathon-blue-100", "text-white");
    cy.get('[data-cy="confirm-filter"]')
      .get("div")
      .should("have.class", "bg-hackathon-blue-100", "text-white");
  });

  it("Click Filters", () => {
    cy.get('[data-cy="pending-filter"]').click();
    cy.get('[data-cy="pending-filter"]')
      .get("div")
      .should("have.class", "text-hackathon-blue-100", "bg-white");
    cy.get('[data-cy="not attending-filter"]').click();
    cy.get('[data-cy="not attending-filter"]')
      .get("div")
      .should("have.class", "text-hackathon-blue-100", "bg-white");
    cy.get('[data-cy="confirm-filter"]').click();
    cy.get('[data-cy="confirm-filter"]')
      .get("div")
      .should("have.class", "text-hackathon-blue-100", "bg-white");
  });

  it("Click Confirm", () => {
    cy.get('[data-cy="confirm-filter"]').click();
    volunteers.forEach((volunteer) => {
      if (volunteer.status === "confirm")
        cy.get(`[data-cy="${volunteer.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${volunteer.uid}"]`).should("exist");
    });
  });

  it("Click Not Attending", () => {
    cy.get('[data-cy="not attending-filter"]').click();
    volunteers.forEach((volunteer) => {
      if (volunteer.status === "not attending")
        cy.get(`[data-cy="${volunteer.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${volunteer.uid}"]`).should("exist");
    });
  });

  it("Click Pending", () => {
    cy.get('[data-cy="pending-filter"]').click();
    volunteers.forEach((volunteer) => {
      if (volunteer.status === "pending")
        cy.get(`[data-cy="${volunteer.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${volunteer.uid}"]`).should("exist");
    });
  });

  it("Click 2 Filters", () => {
    cy.get('[data-cy="confirm-filter"]').click();
    cy.get('[data-cy="not attending-filter"]').click();
    volunteers.forEach((volunteer) => {
      if (
        volunteer.status === "confirm" ||
        volunteer.status === "not attending"
      )
        cy.get(`[data-cy="${volunteer.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${volunteer.uid}"]`).should("exist");
    });
  });
});
