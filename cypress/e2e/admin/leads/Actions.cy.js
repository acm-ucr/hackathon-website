import response from "../../../fixtures/leads.json";

const five = response.items.slice(0, 5);

describe("Leads Actions", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "leads",
    });
  });

  it("Confirm First 5 Entries", () => {
    five.forEach((leads) =>
      cy.get(`[data-cy="${leads.uid}"]`).find('[data-cy="checkbox"]').click(),
    );

    cy.action({
      tag: "accept",
      page: "leads",
    });

    five.forEach((lead) =>
      cy
        .get(`[data-cy="${lead.uid}"]`)
        .find('[data-cy="accepted-tag"]')
        .should("exist"),
    );
  });

  it("Not Attending First 5 Entries", () => {
    five.forEach((lead) =>
      cy.get(`[data-cy="${lead.uid}"]`).find('[data-cy="checkbox"]').click(),
    );

    cy.action({
      tag: "reject",
      page: "leads",
    });

    five.forEach((lead) =>
      cy
        .get(`[data-cy="${lead.uid}"]`)
        .find('[data-cy="rejected-tag"]')
        .should("exist"),
    );
  });

  it("Delete First 5 Entries", () => {
    five.forEach((lead) =>
      cy.get(`[data-cy="${lead.uid}"]`).find('[data-cy="checkbox"]').click(),
    );

    cy.delete({
      page: "leads",
    });

    five.forEach((lead) =>
      cy.get(`[data-cy="${lead.uid}"]`).should("not.exist"),
    );
  });
});
