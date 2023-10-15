import response from "../../../fixtures/judges.json";

const judges = response.items;

describe("Judge Sort", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admins",
      page: "judges",
    });
  });

  it("Sort Name Up", () => {
    const sorted = judges.sort((a, b) => (a.name > b.name ? -1 : 1));

    cy.get('[data-cy="name-sort-up"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="name"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].name);
      });
    });
  });

  it("Sort Name Down", () => {
    const sorted = judges.sort((a, b) => (b.name > a.name ? -1 : 1));

    cy.get('[data-cy="name-sort-down"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="name"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].name);
      });
    });
  });

  it("Sort Email Up", () => {
    const sorted = judges.sort((a, b) => (a.email > b.email ? -1 : 1));

    cy.get('[data-cy="email-sort-up"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="email"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].email);
      });
    });
  });

  it("Sort Email Down", () => {
    const sorted = judges.sort((a, b) => (b.email > a.email ? -1 : 1));

    cy.get('[data-cy="email-sort-down"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="email"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].email);
      });
    });
  });

  // it("Sort Status Up", () => {
  //   const sorted = judges.sort((a, b) => (a.status > b.status ? -1 : 1));

  //   cy.get('[data-cy="status-sort-up"]').click();

  //   cy.get('[data-cy="table"]').within(() => {
  //     cy.get('[data-cy="status"]').each((element, index) => {
  //       expect(element.text()).to.equal(sorted[index].status);
  //     });
  //   });
  // });

  // it("Sort Status Down", () => {
  //   const sorted = judges.sort((a, b) => (b.status > a.status ? -1 : 1));

  //   cy.get('[data-cy="status-sort-down"]').click();

  //   cy.get('[data-cy="table"]').within(() => {
  //     cy.get('[data-cy="status"]').each((element, index) => {
  //       expect(element.text()).to.equal(sorted[index].status);
  //     });
  //   });
  // });

  it("Sort Affiliation Up", () => {
    const sorted = judges.sort((a, b) =>
      a.affiliation > b.affiliation ? -1 : 1
    );

    cy.get('[data-cy="affiliation-sort-up"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="affiliation"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].affiliation);
      });
    });
  });

  it("Sort Type Down", () => {
    const sorted = judges.sort((a, b) =>
      b.affiliation > a.affiliation ? -1 : 1
    );

    cy.get('[data-cy="affiliation-sort-down"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="affiliation"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].affiliation);
      });
    });
  });
});
