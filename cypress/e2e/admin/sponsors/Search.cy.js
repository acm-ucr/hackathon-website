import response from "../../../fixtures/sponsors.json";

const sponsors = response.items;

describe("Sponsor Search", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "sponsors",
    });
  });

  it("No Search Results", () => {
    cy.get('[data-cy="toolbar"]').find("input").type("Meow");
    cy.contains("No Sponsors Available");
  });

  it("Search For 1st Entry", () => {
    cy.get('[data-cy="toolbar"]').find("input").type(sponsors[0].name);
    cy.get(`[data-cy="${sponsors[0].uid}"]`).should("exist");
  });

  it("Search For Multiple Entries", () => {
    cy.get('[data-cy="toolbar"]').find("input").type("John Cena");
    sponsors.forEach((sponsor) => {
      if (sponsor.name.toLowerCase().includes("john cena"))
        cy.get(`[data-cy="${sponsor.uid}"]`).should("exist");
      else cy.get(`[data-cy="${sponsor.uid}"]`).should("not.exist");
    });
  });
});
