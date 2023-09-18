import Button from "@/components/Forms/Button";

describe("Forms Button", () => {
  it("text", () => {
    const text = "Hello world";
    cy.mount(<Button text={text} />);
    cy.get('[data-cy="Hello world-button"]').should(
      "contains.text",
      "Hello world"
    );
  });

  it("Empty", () => {
    const text = "";
    cy.mount(<Button text={text} />);
    cy.get('[data-cy="-button"]').should("not.contain.text");
  });

  it("onClick", () => {
    const text = "CLICKME";
    const onClick = cy.stub();
    cy.mount(<Button onClick={onClick} text={text} />);
    cy.get('[data-cy="CLICKME-button"]')
      .click()
      .then(() => expect(onClick).to.be.called());
  });
});
