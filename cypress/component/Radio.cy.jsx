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

    // radio container exists
    cy.get("[data-cy=radio-gender]").should("exist");

    // Has text
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

    // Tests if Female button is clicked
    cy.get("[data-cy=radio-button-Female]").should(
      "have.css",
      "background-color",
      "rgb(87, 204, 153)"
    );

    // Tests if Male button is not clicked
    cy.get("[data-cy=radio-button-Male]").should(
      "have.css",
      "background-color",
      "rgba(0, 0, 0, 0)"
    );

    // Tests if Male button is clicked
    cy.get("[data-cy=radio-button-Male]").click();
    cy.get("[data-cy=radio-button-Male]").should(
      "have.css",
      "background-color",
      "rgb(87, 204, 153)"
    );

    // Tests if Female button is unselected
    cy.get("[data-cy=radio-button-Female]").should(
      "have.css",
      "background-color",
      "rgba(0, 0, 0, 0)"
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

    // Cannot find it when editable is set to false
    // Only the text is showing up. No buttons
    // Expected behavior?
    cy.get("[data-cy=radio-button-Female]").should("not.exist");
    cy.get("[data-cy=radio-button-Male]").should("not.exist");
  });
});
