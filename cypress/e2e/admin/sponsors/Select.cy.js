import response from "../../../fixtures/sponsors.json";

const sponsors = response.items;
const five = sponsors.slice(0, 5);

describe("Sponsors Select", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "sponsors",
    });
  });

  it("Select All", () => {
    cy.get('[data-cy="select-all"]').click();
    sponsors.forEach((sponsor) => {
      cy.get(`[data-cy="${sponsor.uid}"]`).should("have.class", "bg-green-100");
    });
  });

  it("Select First 5 Entries", () => {
    five.map((sponsor) =>
      cy.get(`[data-cy="${sponsor.uid}"]`).find('[data-cy="checkbox"]').click()
    );
    sponsors.forEach((sponsor, index) => {
      if (index < 5)
        cy.get(`[data-cy="${sponsor.uid}"]`).should(
          "have.class",
          "bg-green-100"
        );
      else
        cy.get(`[data-cy="${sponsor.uid}"]`).should("have.class", "bg-white");
    });
  });
});
