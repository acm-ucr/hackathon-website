import judges from "../../../fixtures/judges.json";

describe("Judge Sort", () => {
  beforeEach(() => {
    cy.login("admins");
    cy.visit("/");
    cy.wait("@session");
    cy.visit("/admin/judges");
  });

  it("Sort Name Up", () => {
    const sorted = judges.sort((a, b) => (a.name > b.name ? -1 : 1));

    cy.get('[data-cy="name-sort-up"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="name"]').each((element, index) => {
        cy.log(index, element);
        expect(element.text()).to.equal(sorted[index].name);
      });
    });
  });

  it("Sort Name Down", () => {
    const sorted = judges.sort((a, b) => (b.name > a.name ? -1 : 1));

    cy.get('[data-cy="name-sort-down"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="name"]').each((element, index) => {
        cy.log(index, element);
        expect(element.text()).to.equal(sorted[index].name);
      });
    });
  });

  it("Sort Email Up", () => {
    const sorted = judges.sort((a, b) => (a.email > b.email ? -1 : 1));

    cy.get('[data-cy="email-sort-up"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="email"]').each((element, index) => {
        cy.log(index, element);
        expect(element.text()).to.equal(sorted[index].email);
      });
    });
  });

  it("Sort Email Down", () => {
    const sorted = judges.sort((a, b) => (b.email > a.email ? -1 : 1));

    cy.get('[data-cy="email-sort-down"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="email"]').each((element, index) => {
        cy.log(index, element);
        expect(element.text()).to.equal(sorted[index].email);
      });
    });
  });

  it("Sort Status Up", () => {
    const sorted = judges.sort((a, b) => (a.status > b.status ? -1 : 1));

    cy.get('[data-cy="status-sort-up"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="status"]').each((element, index) => {
        cy.log(index, element);
        expect(element.text()).to.equal(sorted[index].status);
      });
    });
  });

  it("Sort Status Down", () => {
    const sorted = judges.sort((a, b) => (b.status > a.status ? -1 : 1));

    cy.get('[data-cy="status-sort-down"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="status"]').each((element, index) => {
        cy.log(index, element);
        expect(element.text()).to.equal(sorted[index].status);
      });
    });
  });

  it("Sort Type Up", () => {
    const sorted = judges.sort((a, b) => (a.type > b.type ? -1 : 1));

    cy.get('[data-cy="type-sort-up"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="type"]').each((element, index) => {
        cy.log(index, element);
        expect(element.text()).to.equal(sorted[index].type);
      });
    });
  });

  it("Sort Type Down", () => {
    const sorted = judges.sort((a, b) => (b.type > a.type ? -1 : 1));

    cy.get('[data-cy="type-sort-down"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="type"]').each((element, index) => {
        cy.log(index, element);
        expect(element.text()).to.equal(sorted[index].type);
      });
    });
  });
});
