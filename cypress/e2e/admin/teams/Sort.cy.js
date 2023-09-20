import DATA from "../../../fixtures/teams.json";

const teams = DATA.teams;
describe("Team Sort", () => {
  beforeEach(() => {
    cy.login("admin");
    cy.visit("/");
    cy.wait("@session");
    cy.visit("/admin/teams");
  });

  it("Sort Name Up", () => {
    const sorted = teams.sort((a, b) => (a.name > b.name ? -1 : 1));

    cy.get('[data-cy="name-sort-up"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="name"]').each((element, index) => {
        cy.log(index, element);
        expect(element.text()).to.equal(sorted[index].name);
      });
    });
  });

  it("Sort Name Down", () => {
    const sorted = teams.sort((a, b) => (b.name > a.name ? -1 : 1));

    cy.get('[data-cy="name-sort-down"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="name"]').each((element, index) => {
        cy.log(index, element);
        expect(element.text()).to.equal(sorted[index].name);
      });
    });
  });

  it("Sort Status Up", () => {
    const sorted = teams.sort((a, b) => (a.status > b.status ? -1 : 1));

    cy.get('[data-cy="status-sort-up"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="status"]').each((element, index) => {
        cy.log(index, element);
        expect(element.text()).to.equal(sorted[index].status);
      });
    });
  });

  it("Sort Status Down", () => {
    const sorted = teams.sort((a, b) => (b.status > a.status ? -1 : 1));

    cy.get('[data-cy="status-sort-down"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="status"]').each((element, index) => {
        cy.log(index, element);
        expect(element.text()).to.equal(sorted[index].status);
      });
    });
  });
});
