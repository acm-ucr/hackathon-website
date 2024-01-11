import response from "../../../fixtures/mentors.json";

const mentors = response.items;

describe("Mentor Search", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "mentors",
    });
  });

  it("No Search Results", () => {
    cy.get('[data-cy="toolbar"]').find('[data-cy="search-input"]').type("Meow");
    cy.contains("No Mentors Available");
  });

  it("Search For 1st Entry", () => {
    cy.get('[data-cy="toolbar"]')
      .find('[data-cy="search-input"]')
      .type(mentors[0].name);
    cy.get(`[data-cy="${mentors[0].uid}"]`).should("exist");
  });

  it("Search For Multiple Entries", () => {
    cy.get('[data-cy="toolbar"]')
      .find('[data-cy="search-input"]')
      .type("John Cena");
    mentors.forEach((mentor) => {
      if (mentor.name.toLowerCase().includes("john cena"))
        cy.get(`[data-cy="${mentor.uid}"]`).should("exist");
      else cy.get(`[data-cy="${mentor.uid}"]`).should("not.exist");
    });
  });
});
