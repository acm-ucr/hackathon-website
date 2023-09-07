import Button from "@/components/Admin/Button";

describe("Admin Button", () => {
  it("Send Button", () => {
    const color = "green";
    const onClick = cy.stub();
    const text = "send";
    const size = "md";

    cy.mount(
      <Button color={color} text={text} onClick={onClick} size={size} />
    );
    cy.get('[data-cy="send-button"]').contains("send");
    cy.get('[data-cy="send-button"]').should(
      "have.class",
      "bg-hackathon-green-300"
    );
    cy.get('[data-cy="send-button"]').should("have.class", "text-white");
    cy.get('[data-cy="send-button"]').should("have.class", "border-0");
    cy.get('[data-cy="send-button"]').should("have.class", "text-base");
    cy.get('[data-cy="send-button"]').should("have.class", "hover:opacity-50");
    cy.get('[data-cy="send-button"]')
      .click()
      .then(() => expect(onClick).to.be.called);
  });
  it("Check In Button", () => {
    const color = "green";
    const onClick = cy.stub();
    const text = "Check In";
    const size = "xl";

    cy.mount(
      <Button color={color} text={text} onClick={onClick} size={size} />
    );
    cy.get('[data-cy="Check In-button"]').contains("Check In");
    cy.get('[data-cy="Check In-button"]').should(
      "have.class",
      "bg-hackathon-green-300"
    );
    cy.get('[data-cy="Check In-button"]').should("have.class", "text-white");
    cy.get('[data-cy="Check In-button"]').should("have.class", "border-0");
    cy.get('[data-cy="Check In-button"]').should("have.class", "text-xl");
    cy.get('[data-cy="Check In-button"]').should(
      "have.class",
      "hover:opacity-50"
    );
    cy.get('[data-cy="Check In-button"]')
      .click()
      .then(() => expect(onClick).to.be.called);
  });
});
