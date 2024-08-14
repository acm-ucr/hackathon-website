import Tab from "@/components/admin/services/statistics/Tab";

describe("Tab", () => {
  it("Tab-box", () => {
    const title = "hackathon";
    const value = "10";

    cy.mount(<Tab title={title} value={value} />);
    cy.get('[data-cy="hackathon-tab"]').should("have.text", title);
    cy.get('[data-cy="10-value"]').should("have.text", value);
  });
});
