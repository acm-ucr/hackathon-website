import response from "../../../fixtures/panelists.json";

const panelists = response.items;

describe("Panelist Search", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "panelists",
    });
  });

  it("No Search Results", () => {
    cy.get('[data-cy="toolbar"]').find("input").type("Meow");
    cy.contains("No Panelists Available");
  });

  it("Search For 1st Entry", () => {
    cy.get('[data-cy="toolbar"]').find("input").type(panelists[0].name);
    cy.get(`[data-cy="${panelists[0].uid}"]`).should("exist");
  });

  it("Search For Multiple Entries", () => {
    cy.get('[data-cy="toolbar"]').find("input").type("John Cena");
    panelists.forEach((panelist) => {
      if (panelist.name.toLowerCase().includes("john cena"))
        cy.get(`[data-cy="${panelist.uid}"]`).should("exist");
      else cy.get(`[data-cy="${panelist.uid}"]`).should("not.exist");
    });
  });
});
