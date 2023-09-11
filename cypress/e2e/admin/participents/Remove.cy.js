import { participantList } from "../../../../src/data/mock/Participants";

const firstThree = participantList.slice(0, 3);
const middleThree = participantList.slice(10, 13);
const lastThree = participantList.slice(17, 20);

describe("Unselected Participants Data", () => {
  beforeEach(() => {
    cy.login("admin");
    cy.visit("/");
    cy.wait("@session");
    cy.visit("/admin/participants");
  });

  it("Delete First Three Entries", () => {
    firstThree.forEach((participant) => {
      cy.get(`[data-cy="${participant.uid}"]`)
        .find('[data-cy="checkbox"]')
        .click();
    });

    cy.get('[data-cy="toolbar"]').find('[data-cy="delete"]').click();
    cy.get(`[data-cy="confirm-button"]`).click();

    firstThree.forEach((participant) =>
      cy.get(`[data-cy="${participant.uid}"]`).should("not.exist")
    );
  });

  it("Delete Middle Three Entries", () => {
    middleThree.forEach((participant) => {
      cy.get(`[data-cy="${participant.uid}"]`)
        .find('[data-cy="checkbox"]')
        .click();
    });

    cy.get('[data-cy="toolbar"]').find('[data-cy="delete"]').click();
    cy.get(`[data-cy="confirm-button"]`).click();

    middleThree.forEach((participant) =>
      cy.get(`[data-cy="${participant.uid}"]`).should("not.exist")
    );
  });

  it("Delete Last Three Entries", () => {
    lastThree.forEach((participant) => {
      cy.get(`[data-cy="${participant.uid}"]`)
        .find('[data-cy="checkbox"]')
        .click();
    });

    cy.get('[data-cy="toolbar"]').find('[data-cy="delete"]').click();
    cy.get(`[data-cy="confirm-button"]`).click();

    lastThree.forEach((participant) =>
      cy.get(`[data-cy="${participant.uid}"]`).should("not.exist")
    );
  });
});
