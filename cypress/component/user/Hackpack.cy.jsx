import Hackpack from "@/components/user/resources/Hackpack";

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
        "items-center justify-between rounded-xl bg-white p-3 opacity-100 hover:opacity-70",
      )
      .should("have.attr", "href", link)
      .should("have.attr", "target", "_black");

    cy.get('[data-cy="hackpack-text"]').should("contain.text", "Hackpack");

    cy.get('[data-cy="hackpack-techs"]')
      .should("have.class", "flex flex-wrap", "have.length", techs.length)
      .children('[data-cy="hackpack-tech"]');

    techs.forEach((tech, index) => {
      cy.get('[data-cy="hackpack-tech"]').eq(index).contains(tech);

      cy.get('[data-cy="hackpack-icon"]')
        .eq(index)
        .should("have.class", "text-hackathon-blue-100");
    });
  });
});
