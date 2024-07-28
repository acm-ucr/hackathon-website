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
        "w-full rounded-xl border-2 border-gray-100 bg-gray-100 p-4 duration-300 hover:border-gray-300"
      )
      .should("have.attr", "href", link)
      .should("have.attr", "target", "_black");

    cy.get('[data-cy="hackpack-text"]').should(
      "have.class",
      "font-bold",
      "contain.text",
      "Hackpack"
    );

    cy.get('[data-cy="hackpack-techs"]')
      .should("have.class", "flex flex-wrap", "have.length", techs.length)
      .children('[data-cy="hackpack-tech"]');

    techs.forEach((tech, index) => {
      cy.get('[data-cy="hackpack-techs"] [data-cy="hackpack-tech"]')
        .eq(index)
        .contains(tech)
        .should(
          "have.class",
          "flex items-center rounded-full px-1 text-gray-400"
        );

      cy.get('[data-cy="hackpack-tech"] [data-cy="hackpack-icon"]')
        .eq(index)
        .should("have.class", "mr-1 text-hackathon-blue-100");
    });
  });
});
