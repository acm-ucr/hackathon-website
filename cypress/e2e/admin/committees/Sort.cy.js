import response from "../../../fixtures/committees.json";

const committees = response.items;

describe("Committee Sort", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "committees",
    });
  });

  it("Sort Name Up", () => {
    const sorted = committees.sort((a, b) => (a.name > b.name ? -1 : 1));

    cy.get('[data-cy="name-sort-up"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="name"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].name);
      });
    });
  });

  it("Sort Name Down", () => {
    const sorted = committees.sort((a, b) => (b.name > a.name ? -1 : 1));

    cy.get('[data-cy="name-sort-down"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="name"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].name);
      });
    });
  });

  it("Sort Email Up", () => {
    const sorted = committees.sort((a, b) => (a.email > b.email ? -1 : 1));

    cy.get('[data-cy="email-sort-up"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="email"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].email);
      });
    });
  });

  it("Sort Email Down", () => {
    const sorted = committees.sort((a, b) => (b.email > a.email ? -1 : 1));

    cy.get('[data-cy="email-sort-down"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="email"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].email);
      });
    });
  });

  it("Sort Affiliation Up", () => {
    const sorted = committees.sort((a, b) =>
      a.affiliation > b.affiliation ? -1 : 1
    );

    cy.get('[data-cy="affiliation-sort-up"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="affiliation"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].affiliation);
      });
    });
  });

  it("Sort Affiliation Down", () => {
    const sorted = committees.sort((a, b) =>
      b.affiliation > a.affiliation ? -1 : 1
    );

    cy.get('[data-cy="affiliation-sort-down"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="affiliation"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].affiliation);
      });
    });
  });

  it("Sort Status Up", () => {
    const sorted = committees.sort((a, b) =>
      a.status.committees > b.status.committees ? -1 : 1
    );

    cy.get('[data-cy="status-sort-up"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="status"]').each((element, index) => {
        expect(element.text()).to.equal(
          sorted[index].status.committees.endsWith("t")
            ? sorted[index].status.committees + "ed"
            : sorted[index].status.committees
        );
      });
    });
  });

  it("Sort Status Down", () => {
    const sorted = committees.sort((a, b) =>
      b.status.committees > a.status.committees ? -1 : 1
    );

    cy.get('[data-cy="status-sort-down"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="status"]').each((element, index) => {
        expect(element.text()).to.equal(
          sorted[index].status.committees.endsWith("t")
            ? sorted[index].status.committees + "ed"
            : sorted[index].status.committees
        );
      });
    });
  });
});
