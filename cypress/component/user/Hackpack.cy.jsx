import Hackpack from "@/components/user/Hackpack";
describe("HackPacks", () => {
  it("HackPack Components", () => {
    const text = "Hackpack";
    const techs = [
      "Javascript",
      "Next.js",
      "Firebase",
      "Tailwind",
      "MongoDB",
      "Arduino",
      "C++",
    ];
    const link = "https://www.example.com/";
    const headerClasses = "font-bold";
    const techClasses = "flex flex-wrap";
    const linkClass =
      "w-full bg-gray-100 rounded-xl p-4 hover:border-gray-300 border-gray-100 border-2 duration-300";
    const techvariableClass =
      "text-gray-400 rounded-full flex items-center px-1";
    const techfaviconClass = "text-hackathon-blue-100 mr-1";
    ("w-full bg-gray-100 rounded-xl p-4 hover:border-gray-300 border-gray-100 border-2 duration-300");
    cy.mount(<Hackpack text={text} techs={techs} link={link} />);

    cy.get('[data-cy="link-component-test"]')
      .should("have.class", linkClass)
      .should("have.attr", "href", link)
      .should("have.attr", "target", "_black");

    cy.get('[data-cy="Header-test"]').should(
      "have.class",
      headerClasses,
      "contain.text",
      text
    );

    cy.get('[data-cy="Techs-test"]')
      .should("have.class", techClasses, "have.length", techs.length)
      .children('[data-cy="tech-variable-component"]');

    techs.forEach((tech, index) => {
      cy.get('[data-cy="Techs-test"] [data-cy="tech-variable-component"]')
        .eq(index)
        .should("contain.text", tech)
        .should("have.class", techvariableClass);

      cy.get('[data-cy="Techs-test"] [data-cy="favicon"]')
        .eq(index)
        .should("have.class", techfaviconClass);
    });
  });
});
