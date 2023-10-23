import response from "../../../fixtures/judges.json";

const judges = response.items;
const five = judges.slice(0, 5);

describe("Mentor Select", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "judges",
    });
  });

  it("Select All", () => {
    cy.get('[data-cy="select-all"]').click();
    judges.forEach((judge) => {
      cy.get(`[data-cy="${judge.uid}"]`).should("have.class", "bg-green-100");
    });
  });

  it("Select First 5 Entries", () => {
    five.map((judge) =>
      cy.get(`[data-cy="${judge.uid}"]`).find('[data-cy="checkbox"]').click()
    );
    judges.forEach((judge, index) => {
      if (index < 5)
        cy.get(`[data-cy="${judge.uid}"]`).should("have.class", "bg-green-100");
      else cy.get(`[data-cy="${judge.uid}"]`).should("have.class", "bg-white");
    });
  });
});
