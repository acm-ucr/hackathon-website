import Radio from "@/components/dynamic/Radio";
import { GENDERS } from "@/data/dynamic/form/Information";
import { useState } from "react";

describe("Radio", () => {
  it("renders text", () => {
    const Parent = () => {
      const [user, setUser] = useState({ name: "" });
      return (
        <Radio
          text="Gender"
          options={GENDERS}
          field="gender"
          user={user}
          setUser={setUser}
          editable={true}
        />
      );
    };

    cy.mount(<Parent />);

    cy.get("[data-cy=radio-gender]").should("exist");

    cy.get("[data-cy=radio-Female]").should("have.text", GENDERS[0]);

    cy.get("[data-cy=radio-Male]").should("have.text", GENDERS[1]);

    cy.get("[data-cy=radio-Transgender]").should("have.text", GENDERS[2]);

    cy.get("[data-cy=radio-Nonbinary]").should("have.text", GENDERS[3]);
  });

  it("selects options when editable", () => {
    const Parent = () => {
      const [user, setUser] = useState({ name: "" });
      return (
        <Radio
          text="Gender"
          options={GENDERS}
          field="gender"
          user={user}
          setUser={setUser}
          editable={true}
        />
      );
    };

    cy.mount(<Parent />);

    cy.get("[data-cy=radio-button-Female]").click();

    cy.get("[data-cy=radio-button-Female]").should(
      "have.class",
      "bg-hackathon-green-300"
    );

    cy.get("[data-cy=radio-button-Male]").should(
      "have.class",
      "bg-transparent"
    );

    cy.get("[data-cy=radio-button-Male]").click();
    cy.get("[data-cy=radio-button-Male]").should(
      "have.class",
      "bg-hackathon-green-300"
    );

    cy.get("[data-cy=radio-button-Female]").should(
      "have.class",
      "bg-transparent"
    );
  });

  it("cannot select options when uneditable", () => {
    const Parent = () => {
      const [user, setUser] = useState({ name: "" });
      return (
        <Radio
          text="Gender"
          options={GENDERS}
          field="gender"
          user={user}
          setUser={setUser}
          editable={false}
        />
      );
    };

    cy.mount(<Parent />);
    cy.get("[data-cy=radio-button-Female]").should("not.exist");
    cy.get("[data-cy=radio-button-Male]").should("not.exist");
  });
});
