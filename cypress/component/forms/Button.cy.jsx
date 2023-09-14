import Button from "@/components/Forms/Button";

describe("Button.cy.jsx", () => {
  it("text", () => {
    const text = "Hello, world";
    cy.mount(<Button text={text} />);
    cy.get('[data-cy="Hello, world-button"]').should(
      "contains.text",
      "Hello, world"
    );
  });

  it("no text", () => {
    const text = "";
    cy.mount(<Button text={text} />);
    cy.get('[data-cy="-button"]').should("not.contain.text");
  });

  it("clickable", () => {
    const text = "clickable";
    const onClick = cy.stub();
    cy.mount(<Button onClick={onClick} text={text} />);
    cy.get('[data-cy="clickable-button"]').click();
  });
});
