import response from "../../../fixtures/interests.json";

const interests = response.items;
const five = interests.slice(0, 5);

describe("Interests Select", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "interests",
    });
  });

  it("Select All", () => {
    cy.get('[data-cy="header"]').find('[data-cy="checkbox"]').click();
    interests.forEach((interest) => {
      cy.get(`[data-cy="${interest.uid}"]`).should(
        "have.class",
        "bg-green-100",
      );
    });
  });

  it("Select First 5 Entries", () => {
    five.map((interest) =>
      cy
        .get(`[data-cy="${interest.uid}"]`)
        .find('[data-cy="checkbox"]')
        .click(),
    );
    interests.forEach((interest, index) => {
      if (index < 5)
        cy.get(`[data-cy="${interest.uid}"]`).should(
          "have.class",
          "bg-green-100",
        );
      else
        cy.get(`[data-cy="${interest.uid}"]`).should("have.class", "bg-white");
    });
  });
});
