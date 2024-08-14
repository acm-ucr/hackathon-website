import Checkbox from "@/components/Checkbox";
import { useState } from "react";

describe("Checkbox", () => {
  it("OFF", () => {
    const Parent = () => {
      const [toggle, setToggle] = useState(false);

      const onClick = () => {
        setToggle(!toggle);
      };

      return <Checkbox toggle={toggle} onClick={onClick} />;
    };

    cy.mount(<Parent />);

    cy.get('[data-cy="checkbox-bg"]').should(
      "have.class",
      "bg-hackathon-gray-100",
    );
  });

  it("ON", () => {
    const Parent = () => {
      const [toggle, setToggle] = useState(true);

      const onClick = () => {
        setToggle(!toggle);
      };

      return <Checkbox toggle={toggle} onClick={onClick} />;
    };

    cy.mount(<Parent />);

    cy.get('[data-cy="checkbox-bg"]').should(
      "have.class",
      "bg-hackathon-blue-100",
    );
  });

  it("Display Text", () => {
    const Parent = () => {
      const [toggle, setToggle] = useState(false);
      const text = "Hello World";

      const onClick = () => {
        setToggle(!toggle);
      };

      return <Checkbox toggle={toggle} onClick={onClick} text={text} />;
    };

    cy.mount(<Parent />);

    cy.get('[data-cy="checkbox-text"]').contains("Hello World");
  });

  it("Toggle", () => {
    const Parent = () => {
      const [toggle, setToggle] = useState(false);

      const onClick = () => {
        setToggle(!toggle);
      };

      return <Checkbox toggle={toggle} onClick={onClick} />;
    };

    cy.mount(<Parent />);

    cy.get('[data-cy="checkbox-bg"]').click();
    cy.get('[data-cy="checkbox-bg"]').should(
      "have.class",
      "bg-hackathon-blue-100",
    );
  });
});
