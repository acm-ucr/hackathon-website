import response from "../../../fixtures/leads.json";

const leads = response.items;

describe("Lead Search", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "leads",
    });
  });

  it("No Search Results", () => {
    cy.get('[data-cy="toolbar"]').find("input").type("Meow");
    cy.contains("No Leads Available");
  });

  it("Search For 1st Entry", () => {
    cy.get('[data-cy="toolbar"]').find("input").type(leads[0].name);
    cy.get(`[data-cy="${leads[0].uid}"]`).should("exist");
  });

  it("Search For Multiple Entries", () => {
    cy.get('[data-cy="toolbar"]').find("input").type("John Cena");
    leads.forEach((lead) => {
      if (lead.name.toLowerCase().includes("john cena"))
        cy.get(`[data-cy="${lead.uid}"]`).should("exist");
      else cy.get(`[data-cy="${lead.uid}"]`).should("not.exist");
    });
  });
});
