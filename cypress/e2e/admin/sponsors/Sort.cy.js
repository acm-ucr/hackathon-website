import response from "../../../fixtures/sponsors.json";

const sponsors = response.items;

describe("Sponsor Sort", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "sponsors",
    });
  });

  it("Sort Name Up", () => {
    const sorted = sponsors.sort((a, b) => (a.name > b.name ? -1 : 1));

    cy.get('[data-cy="name-sort-up"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="name"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].name);
      });
    });
  });

  it("Sort Name Down", () => {
    const sorted = sponsors.sort((a, b) => (b.name > a.name ? -1 : 1));

    cy.get('[data-cy="name-sort-down"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="name"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].name);
      });
    });
  });

  it("Sort Email Up", () => {
    const sorted = sponsors.sort((a, b) => (a.email > b.email ? -1 : 1));

    cy.get('[data-cy="email-sort-up"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="email"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].email);
      });
    });
  });

  it("Sort Email Down", () => {
    const sorted = sponsors.sort((a, b) => (b.email > a.email ? -1 : 1));

    cy.get('[data-cy="email-sort-down"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="email"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].email);
      });
    });
  });
  it("Sort Phone Up", () => {
    const sorted = sponsors.sort((a, b) => (a.phone > b.phone ? -1 : 1));

    cy.get('[data-cy="phone-sort-up"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="phone"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].phone);
      });
    });
  });

  it("Sort Phone Down", () => {
    const sorted = sponsors.sort((a, b) => (b.phone > a.phone ? -1 : 1));

    cy.get('[data-cy="phone-sort-down"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="phone"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].phone);
      });
    });
  });
  it("Sort Company Up", () => {
    const sorted = sponsors.sort((a, b) => (a.company > b.company ? -1 : 1));

    cy.get('[data-cy="company-sort-up"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="company"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].company);
      });
    });
  });

  it("Sort Company Down", () => {
    const sorted = sponsors.sort((a, b) => (b.company > a.company ? -1 : 1));

    cy.get('[data-cy="company-sort-down"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="company"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].company);
      });
    });
  });
  it("Sort Position Up", () => {
    const sorted = sponsors.sort((a, b) => (a.position > b.position ? -1 : 1));

    cy.get('[data-cy="position-sort-up"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="position"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].position);
      });
    });
  });

  it("Sort Position Down", () => {
    const sorted = sponsors.sort((a, b) => (b.position > a.position ? -1 : 1));

    cy.get('[data-cy="position-sort-down"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="position"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].position);
      });
    });
  });

  // it("Sort Status Up", () => {
  //   const sorted = sponsors.sort((a, b) => (a.status > b.status ? -1 : 1));

  //   cy.get('[data-cy="status-sort-up"]').click();

  //   cy.get('[data-cy="table"]').within(() => {
  //     cy.get('[data-cy="status"]').each((element, index) => {
  //       expect(element.text()).to.equal(sorted[index].status);
  //     });
  //   });
  // });

  // it("Sort Status Down", () => {
  //   const sorted = sponsors.sort((a, b) => (b.status > a.status ? -1 : 1));

  //   cy.get('[data-cy="status-sort-down"]').click();

  //   cy.get('[data-cy="table"]').within(() => {
  //     cy.get('[data-cy="status"]').each((element, index) => {
  //       expect(element.text()).to.equal(sorted[index].status);
  //     });
  //   });
  // });

  it("Sort Tier Up", () => {
    const sorted = sponsors.sort((a, b) => (a.tier > b.tier ? -1 : 1));

    cy.get('[data-cy="tier-sort-up"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="tier"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].tier);
      });
    });
  });

  it("Sort Tier Down", () => {
    const sorted = sponsors.sort((a, b) => (b.tier > a.tier ? -1 : 1));

    cy.get('[data-cy="tier-sort-down"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="tier"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].tier);
      });
    });
  });
});
