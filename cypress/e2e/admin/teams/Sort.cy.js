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
    const sorted = teams.sort((a, b) => (a.uid > b.uid ? -1 : 1));

    cy.get('[data-cy="uid-sort-up"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="uid"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].uid);
      });
    });
  });

  it("Sort Id Down", () => {
    const sorted = teams.sort((a, b) => (b.uid > a.uid ? -1 : 1));

    cy.get('[data-cy="uid-sort-down"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="uid"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].uid);
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
