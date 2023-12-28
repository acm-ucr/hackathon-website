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

  it("Sort Id Up", () => {
    const sorted = teams.sort((a, b) => (a.id > b.id ? -1 : 1));

    cy.get('[data-cy="id-sort-up"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="id"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].id);
      });
    });
  });

  it("Sort Id Down", () => {
    const sorted = teams.sort((a, b) => (b.id > a.id ? -1 : 1));

    cy.get('[data-cy="id-sort-down"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="id"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].id);
      });
    });
  });

  // it("Sort Status Up", () => {
  //   const sorted = teams.sort((a, b) => (a.status > b.status ? -1 : 1));

  //   cy.get('[data-cy="status-sort-up"]').click();

  //   cy.get('[data-cy="table"]').within(() => {
  //     cy.get('[data-cy="status"]').each((element, index) => {
  //       expect(element.text()).to.equal(sorted[index].status);
  //     });
  //   });
  // });

  // it("Sort Status Down", () => {
  //   const sorted = teams.sort((a, b) => (b.status > a.status ? -1 : 1));

  //   cy.get('[data-cy="status-sort-down"]').click();

  //   cy.get('[data-cy="table"]').within(() => {
  //     cy.get('[data-cy="status"]').each((element, index) => {
  //       expect(element.text()).to.equal(sorted[index].status);
  //     });
  //   });
  // });
});
