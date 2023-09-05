import { adminList } from "../../../../src/data/mock/admin";
describe("Admin Actions", () => {
  beforeEach(() => {
    cy.login("admin");
    cy.visit("/");
    cy.wait("@session");
    cy.visit("/admin/admin");
  });
  it("Filter Default Color", () => {
    cy.get('[data-cy="pendingFilter"]')
      .get("div")
      .should("have.class", "bg-hackathon-blue-100");
    cy.get('[data-cy="pendingFilter"]')
      .get("div")
      .should("have.class", "text-white");
    cy.get('[data-cy="rejectedFilter"]')
      .get("div")
      .should("have.class", "bg-hackathon-blue-100");
    cy.get('[data-cy="rejectedFilter"]')
      .get("div")
      .should("have.class", "text-white");
    cy.get('[data-cy="acceptedFilter"]')
      .get("div")
      .should("have.class", "bg-hackathon-blue-100");
    cy.get('[data-cy="acceptedFilter"]')
      .get("div")
      .should("have.class", "text-white");
  });

  it("Filters Click Color", () => {
    cy.get('[data-cy="pendingFilter"]').click();
    cy.get('[data-cy="pendingFilter"]')
      .get("div")
      .should("have.class", "bg-white");
    cy.get('[data-cy="pendingFilter"]')
      .get("div")
      .should("have.class", "text-hackathon-blue-100");
    cy.get('[data-cy="rejectedFilter"]').click();
    cy.get('[data-cy="rejectedFilter"]')
      .get("div")
      .should("have.class", "bg-white");
    cy.get('[data-cy="rejectedFilter"]')
      .get("div")
      .should("have.class", "text-hackathon-blue-100");
    cy.get('[data-cy="acceptedFilter"]').click();
    cy.get('[data-cy="acceptedFilter"]')
      .get("div")
      .should("have.class", "bg-white");
    cy.get('[data-cy="acceptedFilter"]')
      .get("div")
      .should("have.class", "text-hackathon-blue-100");
  });

  it("Pending Click Action", () => {
    cy.get('[data-cy="pendingFilter"]').click();
    adminList.forEach((admin) => {
      if (admin.status === "pending")
        cy.get(`[data-cy="${admin.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${admin.uid}"]`).should("exist");
    });
  });

  it("Rejected Click Action", () => {
    cy.get('[data-cy="rejectedFilter"]').click();
    adminList.forEach((admin) => {
      if (admin.status === "reject")
        cy.get(`[data-cy="${admin.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${admin.uid}"]`).should("exist");
    });
  });

  it("Accepted Click Action", () => {
    cy.get('[data-cy="acceptedFilter"]').click();
    adminList.forEach((admin) => {
      if (admin.status === "accept")
        cy.get(`[data-cy="${admin.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${admin.uid}"]`).should("exist");
    });
  });

  it("Pending Accepted Click Action", () => {
    cy.get('[data-cy="acceptedFilter"]').click();
    cy.get('[data-cy="pendingFilter"]').click();
    adminList.forEach((admin) => {
      if (admin.status === "accept" || admin.status === "pending")
        cy.get(`[data-cy="${admin.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${admin.uid}"]`).should("exist");
    });
  });

  it("Pending Rejected Click Action", () => {
    cy.get('[data-cy="rejectedFilter"]').click();
    cy.get('[data-cy="pendingFilter"]').click();
    adminList.forEach((admin) => {
      if (admin.status === "reject" || admin.status === "pending")
        cy.get(`[data-cy="${admin.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${admin.uid}"]`).should("exist");
    });
  });

  it("Accepted Rejected Click Action", () => {
    cy.get('[data-cy="rejectedFilter"]').click();
    cy.get('[data-cy="acceptedFilter"]').click();
    adminList.forEach((admin) => {
      if (admin.status === "reject" || admin.status === "accept")
        cy.get(`[data-cy="${admin.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${admin.uid}"]`).should("exist");
    });
  });
});
