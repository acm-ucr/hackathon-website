import response from "../../../fixtures/teams.json";

const teams = response.items;

describe("Team Sort", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "teams",
    });
  });

  it("Sort Name Up", () => {
    const sorted = teams.sort((a, b) => (a.name > b.name ? -1 : 1));

    cy.get('[data-cy="name-sort-up"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="name"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].name);
      });
    });
  });

  it("Sort Name Down", () => {
    const sorted = teams.sort((a, b) => (b.name > a.name ? -1 : 1));

    cy.get('[data-cy="name-sort-down"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="name"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].name);
      });
    });
  });

  it("Sort Status Up", () => {
    const sorted = teams.sort((a, b) =>
      a.status.teams > b.status.teams ? -1 : 1
    );

    cy.get('[data-cy="status-sort-up"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="status"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].status.teams);
      });
    });
  });

  it("Sort Status Down", () => {
    const sorted = teams.sort((a, b) =>
      b.status.teams > a.status.teams ? -1 : 1
    );

    cy.get('[data-cy="status-sort-down"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="status"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].status.teams);
      });
    });
  });
});
