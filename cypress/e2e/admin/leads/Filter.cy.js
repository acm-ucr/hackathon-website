import response from "../../../fixtures/leads.json";

const leads = response.items;

describe("Leads Filters", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "leads",
    });
  });

  it("Default Filters", () => {
    cy.get('[data-cy="pending-filter"]')
      .get("div")
      .should("have.class", "bg-hackathon-blue-100", "text-white");
    cy.get('[data-cy="rejected-filter"]')
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
    cy.get('[data-cy="rejected-filter"]').click();
    cy.get('[data-cy="rejected-filter"]')
      .get("div")
      .should("have.class", "text-hackathon-blue-100", "bg-white");
    cy.get('[data-cy="accepted-filter"]').click();
    cy.get('[data-cy="accepted-filter"]')
      .get("div")
      .should("have.class", "text-hackathon-blue-100", "bg-white");
  });

  it("Click Confirm", () => {
    cy.get('[data-cy="accepted-filter"]').click();
    leads.forEach((lead) => {
      if (lead.status === 1)
        cy.get(`[data-cy="${lead.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${lead.uid}"]`).should("exist");
    });
  });

  it("Click Not Attending", () => {
    cy.get('[data-cy="rejected-filter"]').click();
    leads.forEach((lead) => {
      if (lead.status === -1)
        cy.get(`[data-cy="${lead.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${lead.uid}"]`).should("exist");
    });
  });

  it("Click Pending", () => {
    cy.get('[data-cy="pending-filter"]').click();
    leads.forEach((lead) => {
      if (lead.status === 0)
        cy.get(`[data-cy="${lead.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${lead.uid}"]`).should("exist");
    });
  });

  it("Click 2 Filters", () => {
    cy.get('[data-cy="accepted-filter"]').click();
    cy.get('[data-cy="rejected-filter"]').click();
    leads.forEach((lead) => {
      if (lead.status === 1 || lead.status === -1)
        cy.get(`[data-cy="${lead.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${lead.uid}"]`).should("exist");
    });
  });
});
