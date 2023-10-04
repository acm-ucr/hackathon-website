import response from "../../../fixtures/mentors.json";

const mentors = response.items;

describe("Mentors Filters", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "mentors",
    });
  });

  it("Default Filters", () => {
    cy.get('[data-cy="pending-filter"]')
      .get("div")
      .should("have.class", "bg-hackathon-blue-100", "text-white");
    cy.get('[data-cy="reject-filter"]')
      .get("div")
      .should("have.class", "bg-hackathon-blue-100", "text-white");
    cy.get('[data-cy="accept-filter"]')
      .get("div")
      .should("have.class", "bg-hackathon-blue-100", "text-white");
  });

  it("Click Filters", () => {
    cy.get('[data-cy="pending-filter"]').click();
    cy.get('[data-cy="pending-filter"]')
      .get("div")
      .should("have.class", "text-hackathon-blue-100", "bg-white");
    cy.get('[data-cy="reject-filter"]').click();
    cy.get('[data-cy="reject-filter"]')
      .get("div")
      .should("have.class", "text-hackathon-blue-100", "bg-white");
    cy.get('[data-cy="accept-filter"]').click();
    cy.get('[data-cy="accept-filter"]')
      .get("div")
      .should("have.class", "text-hackathon-blue-100", "bg-white");
  });

  it("Click Confirm", () => {
    cy.get('[data-cy="accept-filter"]').click();
    mentors.forEach((mentor) => {
      if (mentor.status === 1)
        cy.get(`[data-cy="${mentor.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${mentor.uid}"]`).should("exist");
    });
  });

  it("Click Not Attending", () => {
    cy.get('[data-cy="reject-filter"]').click();
    mentors.forEach((mentor) => {
      if (mentor.status === -1)
        cy.get(`[data-cy="${mentor.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${mentor.uid}"]`).should("exist");
    });
  });

  it("Click Pending", () => {
    cy.get('[data-cy="pending-filter"]').click();
    mentors.forEach((mentor) => {
      if (mentor.status === 0)
        cy.get(`[data-cy="${mentor.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${mentor.uid}"]`).should("exist");
    });
  });

  it("Click 2 Filters", () => {
    cy.get('[data-cy="accept-filter"]').click();
    cy.get('[data-cy="reject-filter"]').click();
    mentors.forEach((mentor) => {
      if (mentor.status === 1 || mentor.status === -1)
        cy.get(`[data-cy="${mentor.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${mentor.uid}"]`).should("exist");
    });
  });
});
