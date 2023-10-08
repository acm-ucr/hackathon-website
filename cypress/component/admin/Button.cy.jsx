import Button from "@/components/dynamic/admin/Button";
import { useState } from "react";

describe("Button", () => {
  it("Send", () => {
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
      "bg-hackathon-green-300",
      "text-base"
    );
    cy.get('[data-cy="send-button"]')
      .click()
      .then(() => expect(onClick).to.be.called);
  });

  it("Check In", () => {
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
      "bg-hackathon-green-300",
      "text-xl",
      "hover:opacity-50"
    );
    cy.get('[data-cy="Check In-button"]')
      .click()
      .then(() => expect(onClick).to.be.called);
  });

  it("onClick", () => {
    const Parent = () => {
      const [text, setText] = useState("Confirm");
      const color = "green";
      const size = "xl";

      return (
        <Button
          color={color}
          text={text}
          onClick={() => setText("Deny")}
          size={size}
        />
      );
    };

    cy.mount(<Parent />);
    cy.get('[data-cy="Confirm-button"]').contains("Confirm");
    cy.get('[data-cy="Confirm-button"]').should(
      "have.class",
      "bg-hackathon-green-300",
      "text-xl",
      "hover:opacity-50"
    );
    cy.get('[data-cy="Confirm-button"]')
      .click()
      .then(() => cy.get('[data-cy="Deny-button"]').contains("Deny"));
  });
});
