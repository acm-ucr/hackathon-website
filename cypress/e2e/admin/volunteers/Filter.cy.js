import { volunteerList } from "../../../../src/data/mock/Volunteers";

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
      .should("have.class", "bg-hackathon-blue-100");
    cy.get('[data-cy="pending-filter"]')
      .get("div")
      .should("have.class", "text-white");
    cy.get('[data-cy="confirm-filter"]')
      .get("div")
      .should("have.class", "bg-hackathon-blue-100");
    cy.get('[data-cy="confirm-filter"]')
      .get("div")
      .should("have.class", "text-white");
    cy.get('[data-cy="not attending-filter"]')
      .get("div")
      .should("have.class", "bg-hackathon-blue-100");
    cy.get('[data-cy="not attending-filter"]')
      .get("div")
      .should("have.class", "text-white");
  });

  it("Click Filters", () => {
    cy.get('[data-cy="pending-filter"]').click();
    cy.get('[data-cy="pending-filter"]')
      .get("div")
      .should("have.class", "bg-white");
    cy.get('[data-cy="pending-filter"]')
      .get("div")
      .should("have.class", "text-hackathon-blue-100");
    cy.get('[data-cy="confirm-filter"]').click();
    cy.get('[data-cy="confirm-filter"]')
      .get("div")
      .should("have.class", "bg-white");
    cy.get('[data-cy="confirm-filter"]')
      .get("div")
      .should("have.class", "text-hackathon-blue-100");
    cy.get('[data-cy="not attending-filter"]').click();
    cy.get('[data-cy="not attending-filter"]')
      .get("div")
      .should("have.class", "bg-white");
    cy.get('[data-cy="not attending-filter"]')
      .get("div")
      .should("have.class", "text-hackathon-blue-100");
  });

  it("Click Pending", () => {
    cy.get('[data-cy="pending-filter"]').click();
    volunteerList.forEach((volunteer) => {
      if (volunteer.status === "pending")
        cy.get(`[data-cy="${volunteer.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${volunteer.uid}"]`).should("exist");
    });
  });

  it("Click Confirm", () => {
    cy.get('[data-cy="confirm-filter"]').click();
    volunteerList.forEach((volunteer) => {
      if (volunteer.status === "confirm")
        cy.get(`[data-cy="${volunteer.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${volunteer.uid}"]`).should("exist");
    });
  });

  it("Click Not Attending", () => {
    cy.get('[data-cy="not attending-filter"]').click();
    volunteerList.forEach((volunter) => {
      if (volunter.status === "not attending")
        cy.get(`[data-cy="${volunter.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${volunter.uid}"]`).should("exist");
    });
  });

  it("Click Pending and Confirm", () => {
    cy.get('[data-cy="confirm-filter"]').click();
    cy.get('[data-cy="pending-filter"]').click();
    volunteerList.forEach((volunter) => {
      if (volunter.status === "confirm" || volunter.status === "pending")
        cy.get(`[data-cy="${volunter.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${volunter.uid}"]`).should("exist");
    });
  });

  it("Click Pending and Not Attending", () => {
    cy.get('[data-cy="not attending-filter"]').click();
    cy.get('[data-cy="pending-filter"]').click();
    volunteerList.forEach((volunter) => {
      if (volunter.status === "not attending" || volunter.status === "pending")
        cy.get(`[data-cy="${volunter.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${volunter.uid}"]`).should("exist");
    });
  });

  it("Click Confirm and Not Attending", () => {
    cy.get('[data-cy="not attending-filter"]').click();
    cy.get('[data-cy="confirm-filter"]').click();
    volunteerList.forEach((volunter) => {
      if (volunter.status === "not attending" || volunter.status === "confirm")
        cy.get(`[data-cy="${volunter.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${volunter.uid}"]`).should("exist");
    });
  });
});
