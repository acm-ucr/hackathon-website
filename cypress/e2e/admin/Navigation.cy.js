describe("Admin Portal Navigation", () => {
  it("Visit Participants Page", () => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "participants",
    });

    cy.get(".text-2xl").contains("Participants");
  });

  it("Visit Panelists Page", () => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "panelists",
    });

    cy.get(".text-2xl").contains("Panelists");
  });

  it("Visit Teams Page", () => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "teams",
    });
    cy.get(".text-2xl").contains("Teams");
  });

  it("Visit Judges Page", () => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "judges",
    });
    cy.get(".text-2xl").contains("Judges");
  });

  it("Visit Volunteers Page", () => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "volunteers",
    });
    cy.get(".text-2xl").contains("Volunteers");
  });

  it("Visit Mentors Page", () => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "mentors",
    });
    cy.get(".text-2xl").contains("Mentors");
  });

  it("Visit Admin Page", () => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "admins",
    });
    cy.get(".text-2xl").contains("Admins");
  });

  it("Visit Sponsors Page", () => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "sponsors",
    });
    cy.get(".text-2xl").contains("Sponsors");
  });

  it("Visit Committee Page", () => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "committees",
    });
    cy.get(".text-2xl").contains("Committees");
  });
});
