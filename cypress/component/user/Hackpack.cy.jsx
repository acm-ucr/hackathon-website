import Hackpack from "@/components/user/Hackpack";
describe("HackPacks", () => {
  it("HackPack Components", () => {
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

    cy.mount(<Hackpack text="Hackpack" techs={techs} link={link} />);

    cy.get('[data-cy="hackpack-link"]')
      .should(
        "have.class",
        "w-full bg-gray-100 rounded-xl p-4 hover:border-gray-300 border-gray-100 border-2 duration-300",
      )
      .should("have.attr", "href", link)
      .should("have.attr", "target", "_black");

    cy.get('[data-cy="hackpack-text"]').should(
      "have.class",
      "font-bold",
      "contain.text",
      "Hackpack",
    );

    cy.get('[data-cy="hackpack-techs"]')
      .should("have.class", "flex flex-wrap", "have.length", techs.length)
      .children('[data-cy="hackpack-tech"]');

    techs.forEach((tech, index) => {
      cy.get('[data-cy="hackpack-techs"] [data-cy="hackpack-tech"]')
        .eq(index)
        .should("contain.text", tech)
        .should(
          "have.class",
          "text-gray-400 rounded-full flex items-center px-1",
        );

      cy.get('[data-cy="hackpack-tech"] [data-cy="hackpack-icon"]')
        .eq(index)
        .should("have.class", "text-hackathon-blue-100 mr-1");
    });
  });
});
