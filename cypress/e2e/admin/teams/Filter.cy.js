import teamsList from "../../../fixtures/teams.json";

describe("Admin Filters", () => {
  beforeEach(() => {
    cy.login("admin");
    cy.visit("/");
    cy.wait("@session");
    cy.visit("/admin/teams");
  });

  it("Default Filters", () => {
    cy.get('[data-cy="disqualify-filter"]')
      .get("div")
      .should("have.class", "bg-hackathon-blue-100");
    cy.get('[data-cy="disqualify-filter"]')
      .get("div")
      .should("have.class", "text-white");
    cy.get('[data-cy="qualify-filter"]')
      .get("div")
      .should("have.class", "bg-hackathon-blue-100");
    cy.get('[data-cy="qualify-filter"]')
      .get("div")
      .should("have.class", "text-white");
    cy.get('[data-cy="pending-filter"]')
      .get("div")
      .should("have.class", "bg-hackathon-blue-100");
    cy.get('[data-cy="pending-filter"]')
      .get("div")
      .should("have.class", "text-white");
    cy.get('[data-cy="winner-filter"]')
      .get("div")
      .should("have.class", "bg-hackathon-blue-100");
    cy.get('[data-cy="winner-filter"]')
      .get("div")
      .should("have.class", "text-white");
  });

  it("Click Filters", () => {
    cy.get('[data-cy="disqualify-filter"]').click();
    cy.get('[data-cy="disqualify-filter"]')
      .get("div")
      .should("have.class", "bg-white");
    cy.get('[data-cy="disqualify-filter"]')
      .get("div")
      .should("have.class", "text-hackathon-blue-100");
    cy.get('[data-cy="qualify-filter"]').click();
    cy.get('[data-cy="qualify-filter"]')
      .get("div")
      .should("have.class", "bg-white");
    cy.get('[data-cy="qualify-filter"]')
      .get("div")
      .should("have.class", "text-hackathon-blue-100");
    cy.get('[data-cy="pending-filter"]').click();
    cy.get('[data-cy="pending-filter"]')
      .get("div")
      .should("have.class", "bg-white");
    cy.get('[data-cy="pending-filter"]')
      .get("div")
      .should("have.class", "text-hackathon-blue-100");
    cy.get('[data-cy="winner-filter"]').click();
    cy.get('[data-cy="winner-filter"]')
      .get("div")
      .should("have.class", "bg-white");
    cy.get('[data-cy="winner-filter"]')
      .get("div")
      .should("have.class", "text-hackathon-blue-100");
  });

  it("Click Disqualify", () => {
    cy.get('[data-cy="disqualify-filter"]').click();
    teamsList.forEach((admin) => {
      if (admin.status === "disqualify")
        cy.get(`[data-cy="${admin.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${admin.uid}"]`).should("exist");
    });
  });

  it("Click Qualify", () => {
    cy.get('[data-cy="qualify-filter"]').click();
    teamsList.forEach((admin) => {
      if (admin.status === "qualify")
        cy.get(`[data-cy="${admin.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${admin.uid}"]`).should("exist");
    });
  });

  it("Click Pending", () => {
    cy.get('[data-cy="pending-filter"]').click();
    teamsList.forEach((admin) => {
      if (admin.status === "pending")
        cy.get(`[data-cy="${admin.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${admin.uid}"]`).should("exist");
    });
  });

  it("Click Winner", () => {
    cy.get('[data-cy="winner-filter"]').click();
    teamsList.forEach((admin) => {
      if (admin.status === "winner")
        cy.get(`[data-cy="${admin.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${admin.uid}"]`).should("exist");
    });
  });

  it("Click Disqualify and Qualify", () => {
    cy.get('[data-cy="disqualify-filter"]').click();
    cy.get('[data-cy="qualify-filter"]').click();
    teamsList.forEach((admin) => {
      if (admin.status === "disqualify" || admin.status === "qualify")
        cy.get(`[data-cy="${admin.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${admin.uid}"]`).should("exist");
    });
  });

  it("Click Disqualify and Pending", () => {
    cy.get('[data-cy="disqualify-filter"]').click();
    cy.get('[data-cy="pending-filter"]').click();
    teamsList.forEach((admin) => {
      if (admin.status === "disqualify" || admin.status === "pending")
        cy.get(`[data-cy="${admin.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${admin.uid}"]`).should("exist");
    });
  });

  it("Click Disqualify and Winner", () => {
    cy.get('[data-cy="disqualify-filter"]').click();
    cy.get('[data-cy="winner-filter"]').click();
    teamsList.forEach((admin) => {
      if (admin.status === "disqualify" || admin.status === "winner")
        cy.get(`[data-cy="${admin.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${admin.uid}"]`).should("exist");
    });
  });

  it("Click Qualify and Pending", () => {
    cy.get('[data-cy="pending-filter"]').click();
    cy.get('[data-cy="qualify-filter"]').click();
    teamsList.forEach((admin) => {
      if (admin.status === "pending" || admin.status === "qualify")
        cy.get(`[data-cy="${admin.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${admin.uid}"]`).should("exist");
    });
  });

  it("Click Qualify and Winner", () => {
    cy.get('[data-cy="winner-filter"]').click();
    cy.get('[data-cy="qualify-filter"]').click();
    teamsList.forEach((admin) => {
      if (admin.status === "winner" || admin.status === "qualify")
        cy.get(`[data-cy="${admin.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${admin.uid}"]`).should("exist");
    });
  });

  it("Click Winner and Pending", () => {
    cy.get('[data-cy="pending-filter"]').click();
    cy.get('[data-cy="winner-filter"]').click();
    teamsList.forEach((admin) => {
      if (admin.status === "pending" || admin.status === "winner")
        cy.get(`[data-cy="${admin.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${admin.uid}"]`).should("exist");
    });
  });
});
