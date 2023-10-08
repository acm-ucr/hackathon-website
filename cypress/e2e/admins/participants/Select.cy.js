import response from "../../../fixtures/participants.json";

const participants = response.items;
const five = participants.slice(0, 5);

describe("Participant Select", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admins",
      page: "participants",
    });
  });

  it("Select All", () => {
    cy.get('[data-cy="select-all"]').click();
    participants.forEach((participant) => {
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
    participants.forEach((participant, index) => {
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
