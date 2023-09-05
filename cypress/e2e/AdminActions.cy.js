import { adminList } from "../../src/data/mock/admin";
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

  it("Select All Click Action", () => {
    cy.get('[data-cy="selectAll"]').click();
    adminList.forEach((admin) => {
      cy.get(`[data-cy="${admin.uid}"]`).should("have.class", "bg-green-100");
    });
  });
  it("Accept First Five Entries Action", () => {
    for (let i = 0; i < 5; i++)
      cy.get(`[data-cy="${adminList[i].uid}"]`)
        .find('[data-cy="checkbox"]')
        .click();
    cy.get('[data-cy="toolbar"]').find('[data-cy="acceptTag"]').click();
    for (let i = 0; i < 5; i++)
      cy.get(`[data-cy="${adminList[i].uid}"]`)
        .find('[data-cy="acceptedTag"]')
        .should("exist");
  });

  it("Reject First Five Entries Action", () => {
    for (let i = 0; i < 5; i++)
      cy.get(`[data-cy="${adminList[i].uid}"]`)
        .find('[data-cy="checkbox"]')
        .click();
    cy.get('[data-cy="toolbar"]').find('[data-cy="rejectTag"]').click();
    for (let i = 0; i < 5; i++)
      cy.get(`[data-cy="${adminList[i].uid}"]`)
        .find('[data-cy="rejectedTag"]')
        .should("exist");
  });

  it("Input Not Exist Action", () => {
    cy.get('[data-cy="toolbar"]').find("input").type("Meow");
    cy.get('[data-cy="toolbar"]').find("form").submit();
    cy.contains("No admin Available");
  });

  it("Search For The First Entry Action", () => {
    cy.get('[data-cy="toolbar"]').find("input").type(adminList[0].name);
    cy.get('[data-cy="toolbar"]').find("form").submit();
    cy.get(`[data-cy="${adminList[0].uid}"]`).should("exist");
  });
  it("Reset Action", () => {
    cy.get('[data-cy="toolbar"]').find("input").type(adminList[0].name);
    cy.get('[data-cy="toolbar"]').find("form").submit();
    cy.get('[data-cy="toolbar"]').find('[data-cy="resetTag"]').click();
    adminList.forEach((admin) =>
      cy.get(`[data-cy="${admin.uid}"]`).should("exist")
    );
  });
  it("Delete First Five Action", () => {
    for (let i = 0; i < 5; i++)
      cy.get(`[data-cy="${adminList[i].uid}"]`)
        .find('[data-cy="checkbox"]')
        .click();
    cy.get('[data-cy="toolbar"]').find('[data-cy="delete"]').click();
    cy.get('[data-cy="confirmButton"]').click();
    for (let i = 0; i < 5; i++)
      cy.get(`[data-cy="${adminList[i].uid}"]`).should("not.exist");
  });
});
