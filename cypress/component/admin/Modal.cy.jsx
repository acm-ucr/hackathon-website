import Modal from "@/components/admin/dashboards/dashboard/Modal";
import { useState } from "react";

describe("Modal", () => {
  it("Default", () => {
    const Parent = () => {
      const data = {
        title: "Sample Modal",
        src: "https://via.placeholder.com/150",
      };
      const [modal, setModal] = useState(data);

      return modal && <Modal data={modal} setModal={setModal} />;
    };

    cy.mount(<Parent />);
    cy.get('[data-cy="modal"]').should("be.visible", "have.class");
    cy.get('[data-cy="modal-title"]').should(
      "have.class",
      "bg-hackathon-green-300",
    );
    cy.get('[data-cy="modal-close"]').should(
      "have.class",
      "hover:cursor-pointer",
      "text-white",
      "hover:!text-red-500",
    );
    cy.get('[data-cy="modal-image"]').should(
      "have.attr",
      "src",
      "https://via.placeholder.com/150",
    );
    cy.get('[data-cy="image-border"]').should(
      "have.class",
      "border-hackathon-darkgray",
      "bg-hackathon-page",
    );
  });

  it("Close Modal", () => {
    const Parent = () => {
      const data = {
        title: "Sample Modal",
        src: "https://via.placeholder.com/150",
      };

      const [modal, setModal] = useState(data);

      return modal && <Modal data={modal} setModal={setModal} />;
    };

    cy.mount(<Parent />);
    cy.get('[data-cy="modal-close"]').click();
    cy.get('[data-cy="modal"]').should("not.exist");
  });
});
