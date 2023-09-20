import Select from "@/components/Select";
describe("Select", () => {
  const options = ["Option 1", "Option 2", "Option 3"];
  const field = "field";
  const placeholder = "Select an option";
  const title = "Select an option";

  it("Renders", () => {
    const setUserStub = cy.stub();

    const Parent = () => {
      const user = { [field]: "" };

      return (
        <Select
          options={options}
          user={user}
          field={field}
          setUser={setUserStub}
          placeholder={placeholder}
          title={title}
        />
      );
    };

    cy.mount(<Parent />);

    cy.get('[data-cy="toggle"]').should("exist");
    cy.get('[data-cy="menu"]').should("not.exist");
  });

  it("Show dropdown menu", () => {
    const setUserStub = cy.stub();

    const Parent = () => {
      const user = { [field]: "" };

      return (
        <Select
          options={options}
          user={user}
          field={field}
          setUser={setUserStub}
          placeholder={placeholder}
          title={title}
        />
      );
    };

    cy.mount(<Parent />);

    cy.get('[data-cy="toggle"]').click();
    cy.get('[data-cy="menu"]').should("be.visible");
  });
});
