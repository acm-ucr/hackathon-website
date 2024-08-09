import response from "../../../fixtures/leads.json";

const leads = response.items;
const five = leads.slice(0, 5);

describe("Lead Select", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "leads",
    });
  });

  it("Select All", () => {
    cy.get('[data-cy="header"]').find('[data-cy="checkbox"]').click();
    leads.forEach((lead) => {
      cy.get(`[data-cy="${lead.uid}"]`).should("have.class", "bg-green-100");
    });
  });

  it("Select First 5 Entries", () => {
    five.map((lead) =>
      cy.get(`[data-cy="${lead.uid}"]`).find('[data-cy="checkbox"]').click(),
    );
    leads.forEach((lead, index) => {
      if (index < 5)
        cy.get(`[data-cy="${lead.uid}"]`).should("have.class", "bg-green-100");
      else cy.get(`[data-cy="${lead.uid}"]`).should("have.class", "bg-white");
    });
  });
});
