import participants from "../../../fixtures/Participants.json";

describe("Participant Search", () => {
  beforeEach(() => {
    cy.login("admin");
    cy.visit("/");
    cy.wait("@session");
    cy.visit("/admin/participants");
  });

  it("No Search Results", () => {
    cy.get('[data-cy="toolbar"]').find("input").type("Meow");
    cy.get('[data-cy="toolbar"]').find("form").submit();
    cy.contains("No Participants Available");
  });

  it("Search For 1st Entry", () => {
    cy.get('[data-cy="toolbar"]').find("input").type(participants[0].name);
    cy.get('[data-cy="toolbar"]').find("form").submit();
    cy.get(`[data-cy="${participants[0].uid}"]`).should("exist");
  });

  it("Search For Multiple Entries", () => {
    cy.get('[data-cy="toolbar"]').find("input").type("Alex");
    cy.get('[data-cy="toolbar"]').find("form").submit();
    participants.forEach((participant) => {
      if (participant.name.toLowerCase().includes("alex"))
        cy.get(`[data-cy="${participant.uid}"]`).should("exist");
      else cy.get(`[data-cy="${participant.uid}"]`).should("not.exist");
    });
  });
});
