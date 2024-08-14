import Radio from "@/components/Radio";
import { GENDERS } from "@/data/form/Information";
import { useState } from "react";

describe("Radio", () => {
  it("renders text", () => {
    const Parent = () => {
      const [user, setUser] = useState({ name: "" });
      const handleClick = (option, field) => {
        setUser({
          ...user,
          [field]: option,
        });
      };
      return (
        <Radio
          text="Gender"
          options={GENDERS}
          field="gender"
          user={user}
          setUser={setUser}
          editable={true}
          onClick={handleClick}
        />
      );
    };

    cy.mount(<Parent />);

    cy.get("[data-cy=radio-gender]").should("exist");

    cy.get("[data-cy=radio-female]").should("have.text", GENDERS[0]);

    cy.get("[data-cy=radio-male]").should("have.text", GENDERS[1]);

    cy.get("[data-cy=radio-transgender]").should("have.text", GENDERS[2]);

    cy.get("[data-cy=radio-nonbinary]").should("have.text", GENDERS[3]);
  });

  it("selects options when editable", () => {
    const Parent = () => {
      const [user, setUser] = useState({ name: "" });
      const handleClick = (option, field) => {
        setUser({
          ...user,
          [field]: option,
        });
      };
      return (
        <Radio
          text="Gender"
          options={GENDERS}
          field="gender"
          user={user}
          setUser={setUser}
          editable={true}
          onClick={handleClick}
        />
      );
    };

    cy.mount(<Parent />);

    cy.get("[data-cy=radio-button-female]").click();

    cy.get("[data-cy=radio-button-female]").should(
      "have.class",
      "bg-hackathon-green-300",
    );

    cy.get("[data-cy=radio-button-male]").should(
      "have.class",
      "bg-transparent",
    );

    cy.get("[data-cy=radio-button-male]").click();
    cy.get("[data-cy=radio-button-male]").should(
      "have.class",
      "bg-hackathon-green-300",
    );

    cy.get("[data-cy=radio-button-female]").should(
      "have.class",
      "bg-transparent",
    );
  });

  it("cannot select options when uneditable", () => {
    const Parent = () => {
      const [user, setUser] = useState({ name: "" });
      const handleClick = (option, field) => {
        setUser({
          ...user,
          [field]: option,
        });
      };
      return (
        <Radio
          text="Gender"
          options={GENDERS}
          field="gender"
          user={user}
          setUser={setUser}
          editable={false}
          onClick={handleClick}
        />
      );
    };

    cy.mount(<Parent />);
    cy.get("[data-cy=radio-button-Female]").should("not.exist");
    cy.get("[data-cy=radio-button-Male]").should("not.exist");
  });
});
