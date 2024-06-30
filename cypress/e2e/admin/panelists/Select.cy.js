import response from "../../../fixtures/panelists.json";

const panelists = response.items;
const five = panelists.slice(0, 5);

describe("Mentor Select", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "panelists",
    });
  });

  it("Select All", () => {
    cy.get('[data-cy="header"]').find('[data-cy="checkbox"]').click();
    panelists.forEach((panelist) => {
      cy.get(`[data-cy="${panelist.uid}"]`).should(
        "have.class",
        "bg-green-100"
      );
    });
  });

  it("Select First 5 Entries", () => {
    five.map((panelist) =>
      cy.get(`[data-cy="${panelist.uid}"]`).find('[data-cy="checkbox"]').click()
    );
    panelists.forEach((panelist, index) => {
      if (index < 5)
        cy.get(`[data-cy="${panelist.uid}"]`).should(
          "have.class",
          "bg-green-100"
        );
      else
        cy.get(`[data-cy="${panelist.uid}"]`).should("have.class", "bg-white");
    });
  });
});
