import judges from "../../../fixtures/Judges.json";

describe("Judges Filters", () => {
  beforeEach(() => {
    cy.login("admin");
    cy.visit("/");
    cy.wait("@session");
    cy.visit("/admin/judges");
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
    judges.forEach((judge) => {
      if (judge.status === "confirm")
        cy.get(`[data-cy="${judge.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${judge.uid}"]`).should("exist");
    });
  });

  it("Click Not Attending", () => {
    cy.get('[data-cy="not attending-filter"]').click();
    judges.forEach((judge) => {
      if (judge.status === "not attending")
        cy.get(`[data-cy="${judge.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${judge.uid}"]`).should("exist");
    });
  });

  it("Click Pending", () => {
    cy.get('[data-cy="pending-filter"]').click();
    judges.forEach((judge) => {
      if (judge.status === "pending")
        cy.get(`[data-cy="${judge.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${judge.uid}"]`).should("exist");
    });
  });

  it("Click 2 Filters", () => {
    cy.get('[data-cy="confirm-filter"]').click();
    cy.get('[data-cy="not attending-filter"]').click();
    judges.forEach((judge) => {
      if (judge.status === "confirm" || judge.status === "not attending")
        cy.get(`[data-cy="${judge.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${judge.uid}"]`).should("exist");
    });
  });
});
