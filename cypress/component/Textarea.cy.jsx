import Textarea from "@/components/Admin/Textarea";
import { useState } from "react";

describe("Textarea", () => {
  it("Typing...", () => {
    const Parent = () => {
      const [object, setObject] = useState({
        name: "",
      });
      return <Textarea label="name" object={object} setObject={setObject} />;
    };

    cy.mount(<Parent />);
    cy.get(".textarea").type("John Doe");
    cy.get(".textarea").contains("John Doe");
  });

  it("Clear", () => {
    const Parent = () => {
      const [object, setObject] = useState({
        name: "",
      });
      return <Textarea label="name" object={object} setObject={setObject} />;
    };

    cy.mount(<Parent />);
    cy.get(".textarea").type("John Doe");
    cy.get(".textarea").clear();
    cy.get(".textarea").should("be.empty");
  });

  it("Backspace", () => {
    const Parent = () => {
      const [object, setObject] = useState({
        name: "",
      });
      return <Textarea label="name" object={object} setObject={setObject} />;
    };

    cy.mount(<Parent />);
    cy.get(".textarea").type("John Doe");
    cy.get(".textarea").type("{backspace}");
    cy.get(".textarea").contains("John Do");
  });
});
