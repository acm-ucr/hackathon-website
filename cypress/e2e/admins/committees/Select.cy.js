import response from "../../../fixtures/committees.json";

const committees = response.items;
const five = committees.slice(0, 5);

describe("committee Select", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admins",
      page: "committees",
    });
  });

  it("Select All", () => {
    cy.get('[data-cy="select-all"]').click();
    committees.forEach((committee) => {
      cy.get(`[data-cy="${committee.uid}"]`).should(
        "have.class",
        "bg-green-100"
      );
    });
  });

  it("Select First 5 Entries", () => {
    five.map((committee) =>
      cy
        .get(`[data-cy="${committee.uid}"]`)
        .find('[data-cy="checkbox"]')
        .click()
    );
    committees.forEach((committee, index) => {
      if (index < 5)
        cy.get(`[data-cy="${committee.uid}"]`).should(
          "have.class",
          "bg-green-100"
        );
      else
        cy.get(`[data-cy="${committee.uid}"]`).should("have.class", "bg-white");
    });
  });
});
