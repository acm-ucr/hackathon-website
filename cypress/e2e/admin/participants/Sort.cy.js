import response from "../../../fixtures/participants.json";

const participants = response.items;

describe("Participant Sort", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "participants",
    });
  });

  it("Sort Name Up", () => {
    const sorted = participants.sort((a, b) => (a.name > b.name ? -1 : 1));

    cy.get('[data-cy="name-sort-up"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="name"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].name);
      });
    });
  });

  it("Sort Name Down", () => {
    const sorted = participants.sort((a, b) => (b.name > a.name ? -1 : 1));

    cy.get('[data-cy="name-sort-down"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="name"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].name);
      });
    });
  });

  it("Sort Email Up", () => {
    const sorted = participants.sort((a, b) =>
      a.discord > b.discord ? -1 : 1
    );

    cy.get('[data-cy="discord-sort-up"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="discord"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].discord);
      });
    });
  });

  it("Sort Email Down", () => {
    const sorted = participants.sort((a, b) =>
      b.discord > a.discord ? -1 : 1
    );

    cy.get('[data-cy="discord-sort-down"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="discord"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].discord);
      });
    });
  });

  it("Sort Team Up", () => {
    const sorted = participants.sort((a, b) => (a.team > b.team ? -1 : 1));

    cy.get('[data-cy="team-sort-up"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="team"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].team);
      });
    });
  });

  it("Sort Team Down", () => {
    const sorted = participants.sort((a, b) => (b.team > a.team ? -1 : 1));

    cy.get('[data-cy="team-sort-down"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="team"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].team);
      });
    });
  });

  it("Sort Major Up", () => {
    const sorted = participants.sort((a, b) => (a.major > b.major ? -1 : 1));

    cy.get('[data-cy="major-sort-up"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="major"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].major);
      });
    });
  });

  it("Sort Major Down", () => {
    const sorted = participants.sort((a, b) => (b.major > a.major ? -1 : 1));

    cy.get('[data-cy="major-sort-down"]').click();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('[data-cy="major"]').each((element, index) => {
        expect(element.text()).to.equal(sorted[index].major);
      });
    });
  });

  // it("Sort Status Up", () => {
  //   const sorted = participants.sort((a, b) => (a.status > b.status ? -1 : 1));

  //   cy.get('[data-cy="status-sort-up"]').click();

  //   cy.get('[data-cy="table"]').within(() => {
  //     cy.get('[data-cy="status"]').each((element, index) => {
  //       expect(element.text()).to.equal(
  //         sorted[index].status.endsWith("t")
  //           ? sorted[index].status + "ed"
  //           : sorted[index].status
  //       );
  //     });
  //   });
  // });

  // it("Sort Status Down", () => {
  //   const sorted = participants.sort((a, b) => (b.status > a.status ? -1 : 1));

  //   cy.get('[data-cy="status-sort-down"]').click();

  //   cy.get('[data-cy="table"]').within(() => {
  //     cy.get('[data-cy="status"]').each((element, index) => {
  //       expect(element.text()).to.equal(
  //         sorted[index].status.endsWith("t")
  //           ? sorted[index].status + "ed"
  //           : sorted[index].status
  //       );
  //     });
  //   });
  // });
});
