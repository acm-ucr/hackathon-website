import response from "../../../fixtures/volunteers.json";

const volunteers = response.items;

describe("Volunteer Sort", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admins",
      page: "volunteers",
    });
  });

  it("Sort Name Up", () => {
    const sorted = volunteers.sort((a, b) => (a.name > b.name ? -1 : 1));

    cy.get('[data-cy="name-sort-up"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="name"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].name);
      });
    });
  });

  it("Sort Name Down", () => {
    const sorted = volunteers.sort((a, b) => (b.name > a.name ? -1 : 1));

    cy.get('[data-cy="name-sort-down"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="name"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].name);
      });
    });
  });

  it("Sort Email Up", () => {
    const sorted = volunteers.sort((a, b) => (a.email > b.email ? -1 : 1));

    cy.get('[data-cy="email-sort-up"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="email"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].email);
      });
    });
  });

  it("Sort Email Down", () => {
    const sorted = volunteers.sort((a, b) => (b.email > a.email ? -1 : 1));

    cy.get('[data-cy="email-sort-down"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="email"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].email);
      });
    });
  });

  it("Sort Discord Up", () => {
    const sorted = volunteers.sort((a, b) => (a.discord > b.discord ? -1 : 1));

    cy.get('[data-cy="discord-sort-up"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="discord"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].discord);
      });
    });
  });

  it("Sort Discord Down", () => {
    const sorted = volunteers.sort((a, b) => (b.discord > a.discord ? -1 : 1));

    cy.get('[data-cy="discord-sort-down"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="discord"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].discord);
      });
    });
  });

  // it("Sort Status Up", () => {
  //   const sorted = volunteers.sort((a, b) => (a.status > b.status ? -1 : 1));

  //   cy.get('[data-cy="status-sort-up"]').click();

  //   cy.get('[data-cy="table"]').within(() => {
  //     cy.get('[data-cy="status"]').each((element, index) => {
  //       expect(element.text()).to.equal(sorted[index].status);
  //     });
  //   });
  // });

  // it("Sort Status Down", () => {
  //   const sorted = volunteers.sort((a, b) => (b.status > a.status ? -1 : 1));

  //   cy.get('[data-cy="status-sort-down"]').click();

  //   cy.get('[data-cy="table"]').within(() => {
  //     cy.get('[data-cy="status"]').each((element, index) => {
  //       expect(element.text()).to.equal(sorted[index].status);
  //     });
  //   });
  // });
});
