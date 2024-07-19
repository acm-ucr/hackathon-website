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

    cy.mount(<Hackpack text={text} techs={techs} link={link} />);

    cy.get('[data-cy="link-component-test"]')
      .should(
        "have.class",
        "w-full bg-gray-100 rounded-xl p-4 hover:border-gray-300 border-gray-100 border-2 duration-300"
      )
      .should("have.attr", "href", link)
      .should("have.attr", "target", "_black");

    cy.get('[data-cy="header-test"]').should(
      "have.class",
      "font-bold",
      "contain.text",
      text
    );

    cy.get('[data-cy="techs-test"]')
      .should("have.class", "flex flex-wrap", "have.length", techs.length)
      .children('[data-cy="tech-variable-component"]');

    techs.forEach((tech, index) => {
      cy.get('[data-cy="techs-test"] [data-cy="tech-variable-component"]')
        .eq(index)
        .should("contain.text", tech)
        .should(
          "have.class",
          "text-gray-400 rounded-full flex items-center px-1"
        );

      cy.get('[data-cy="techs-test"] [data-cy="icon"]')
        .eq(index)
        .should("have.class", "text-hackathon-blue-100 mr-1");
    });
  });
});
