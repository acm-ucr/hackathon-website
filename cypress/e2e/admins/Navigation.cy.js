describe("Admin Portal Navigation", () => {
  it("Visit Participants Page", () => {
    cy.fetch({
      role: "admins",
      portal: "admins",
      page: "participants",
    });

    cy.get(".text-2xl").contains("Participants");
  });

  it("Visit Teams Page", () => {
    cy.fetch({
      role: "admins",
      portal: "admins",
      page: "teams",
    });
    cy.get(".text-2xl").contains("Teams");
  });

  it("Visit Judges Page", () => {
    cy.fetch({
      role: "admins",
      portal: "admins",
      page: "judges",
    });
    cy.get(".text-2xl").contains("Judges");
  });

  it("Visit Volunteers Page", () => {
    cy.fetch({
      role: "admins",
      portal: "admins",
      page: "volunteers",
    });
    cy.get(".text-2xl").contains("Volunteers");
  });

  it("Visit Mentors Page", () => {
    cy.fetch({
      role: "admins",
      portal: "admins",
      page: "mentors",
    });
    cy.get(".text-2xl").contains("Mentors");
  });

  it("Visit Admin Page", () => {
    cy.fetch({
      role: "admins",
      portal: "admins",
      page: "admins",
    });
    cy.get(".text-2xl").contains("Admins");
  });

  it("Visit Committee Page", () => {
    cy.fetch({
      role: "admins",
      portal: "admins",
      page: "committees",
    });
    cy.get(".text-2xl").contains("Committees");
  });
});
