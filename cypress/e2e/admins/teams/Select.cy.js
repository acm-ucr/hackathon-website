import response from "../../../fixtures/teams.json";

const teams = response.items;
const five = teams.slice(0, 5);

describe("Teams Select", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "teams",
    });
  });

  it("Select All", () => {
    cy.get('[data-cy="select-all"]').click();
    teams.forEach((team) => {
      cy.get(`[data-cy="${team.uid}"]`).should("have.class", "bg-green-100");
    });
  });

  it("Select First 5 Entries", () => {
    five.map((team) =>
      cy.get(`[data-cy="${team.uid}"]`).find('[data-cy="checkbox"]').click()
    );
    teams.forEach((team, index) => {
      if (index < 5)
        cy.get(`[data-cy="${team.uid}"]`).should("have.class", "bg-green-100");
      else cy.get(`[data-cy="${team.uid}"]`).should("have.class", "bg-white");
    });
  });
});
