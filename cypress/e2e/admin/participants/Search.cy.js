import response from "../../../fixtures/participants.json";

const participants = response.items;

describe("Participant Search", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "participants",
    });
  });

  it("No Search Results", () => {
    cy.get('[data-cy="toolbar"]').find('[data-cy="input-input"]').type("Meow");
    cy.get('[data-cy="toolbar"]').find("form").submit();
    cy.contains("No Participants Available");
  });

  it("Search For 1st Entry", () => {
    cy.get('[data-cy="toolbar"]')
      .find('[data-cy="input-input"]')
      .type(participants[0].name);
    cy.get('[data-cy="toolbar"]').find("form").submit();
    cy.get(`[data-cy="${participants[0].uid}"]`).should("exist");
  });

  it("Search For Multiple Entries", () => {
    cy.get('[data-cy="toolbar"]').find('[data-cy="input-input"]').type("Alex");
    cy.get('[data-cy="toolbar"]').find("form").submit();
    participants.forEach((participant) => {
      if (participant.name.toLowerCase().includes("alex"))
        cy.get(`[data-cy="${participant.uid}"]`).should("exist");
      else cy.get(`[data-cy="${participant.uid}"]`).should("not.exist");
    });
  });
});
