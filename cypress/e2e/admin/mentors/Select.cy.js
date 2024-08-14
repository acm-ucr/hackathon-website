import response from "../../../fixtures/mentors.json";

const mentors = response.items;
const five = mentors.slice(0, 5);

describe("Mentor Select", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "mentors",
    });
  });

  it("Select All", () => {
    cy.get('[data-cy="header"]').find('[data-cy="checkbox"]').click();
    mentors.forEach((mentor) => {
      cy.get(`[data-cy="${mentor.uid}"]`).should("have.class", "bg-green-100");
    });
  });

  it("Select First 5 Entries", () => {
    five.map((mentor) =>
      cy.get(`[data-cy="${mentor.uid}"]`).find('[data-cy="checkbox"]').click(),
    );
    mentors.forEach((mentor, index) => {
      if (index < 5)
        cy.get(`[data-cy="${mentor.uid}"]`).should(
          "have.class",
          "bg-green-100",
        );
      else cy.get(`[data-cy="${mentor.uid}"]`).should("have.class", "bg-white");
    });
  });
});
