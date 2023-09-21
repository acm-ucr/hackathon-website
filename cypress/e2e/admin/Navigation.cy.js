describe("Admin Portal Navigation", () => {
  beforeEach(() => {
    cy.login("admins");
    cy.visit("/");
    cy.wait("@session");
  });

  it("Visit Participants Page", () => {
    cy.visit("/admin/participants");
    cy.get(".text-2xl").contains("Participants");
  });

  it("Visit Teams Page", () => {
    cy.visit("/admin/teams");
    cy.get(".text-2xl").contains("Teams");
  });

  it("Visit Participants Page", () => {
    cy.visit("/admin/participants");
    cy.get(".text-2xl").contains("Participants");
  });

  it("Visit Judges Page", () => {
    cy.visit("/admin/judges");
    cy.get(".text-2xl").contains("Judges");
  });

  it("Visit Volunteers Page", () => {
    cy.visit("/admin/volunteers");
    cy.get(".text-2xl").contains("Volunteers");
  });

  it("Visit Mentors Page", () => {
    cy.visit("/admin/mentors");
    cy.get(".text-2xl").contains("Mentors");
  });

  it("Visit Admin Page", () => {
    cy.visit("/admin/admins");
    cy.get(".text-2xl").contains("Admins");
  });

  it("Visit Messenger Page", () => {
    cy.visit("/admin/messenger");
    cy.get(".text-2xl").contains("Messenger");
  });

  it("Visit Statistics Page", () => {
    cy.visit("/admin/statistics");
    cy.get(".text-2xl").contains("Statistics");
  });

  it("Visit Check In Page", () => {
    cy.visit("/admin/checkin");
    cy.get(".text-2xl").contains("Check In");
  });
});
