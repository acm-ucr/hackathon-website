import participantList from "../../../fixtures/Participants.json";

const five = participantList.slice(0, 5);

describe("Participants Select", () => {
  beforeEach(() => {
    cy.login("admin");
    cy.visit("/");
    cy.wait("@session");
    cy.visit("/admin/participants");
  });

  it("Select All", () => {
    cy.get('[data-cy="select-all"]').click();
    participantList.forEach((participant) => {
      cy.get(`[data-cy="${participant.uid}"]`).should(
        "have.class",
        "bg-green-100"
      );
    });
  });

  it("Select First 5 Entries", () => {
    five.map((participant) =>
      cy
        .get(`[data-cy="${participant.uid}"]`)
        .find('[data-cy="checkbox"]')
        .click()
    );
    participantList.forEach((participant, index) => {
      if (index < 5)
        cy.get(`[data-cy="${participant.uid}"]`).should(
          "have.class",
          "bg-green-100"
        );
      else
        cy.get(`[data-cy="${participant.uid}"]`).should(
          "have.class",
          "bg-white"
        );
    });
  });
});
