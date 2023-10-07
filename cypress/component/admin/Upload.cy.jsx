import Upload from "@/components/dynamic/admin/services/Upload";
import { useState } from "react";

describe("Upload", () => {
  it("Upload Multiple Valid files", () => {
    const files = ["sample.pdf", "sample.jpeg", "sample.jpg", "sample.png"];
    const Parent = () => {
      const [email, setEmail] = useState({
        files: [],
      });

      return (
        <Upload
          setObjects={setEmail}
          objects={email}
          size={[1, "MB"]}
          types={["pdf", "jpg", "jpeg", "png"]}
        />
      );
    };

    cy.mount(<Parent />);
    cy.contains("attach");
    files.map((file) => {
      cy.get('[data-cy="upload-input"]')
        .find("input[type=file]")
        .selectFile("cypress/fixtures/files/" + file, { force: true });
    });

    files.map((file) => {
      cy.get(`[data-cy="${file}"]`).should("exist");
    });
  });

  it("Upload Excess Files", () => {
    const files = [
      "sample.pdf",
      "sample.jpeg",
      "sample.jpg",
      "sample.png",
      "extra.jpeg",
      "extra.pdf",
    ];
    const Parent = () => {
      const [email, setEmail] = useState({
        files: [],
      });

      return (
        <Upload
          setObjects={setEmail}
          objects={email}
          size={[1, "MB"]}
          types={["pdf", "jpg", "jpeg", "png"]}
        />
      );
    };

    cy.mount(<Parent />);
    cy.contains("attach");
    files.map((file) => {
      cy.get('[data-cy="upload-input"]')
        .find("input[type=file]")
        .selectFile("cypress/fixtures/files/" + file, { force: true });
    });

    files.map((file) => {
      cy.get(`[data-cy="${file}"]`).should(
        file === "extra.pdf" ? "not.exist" : "exist"
      );
    });
  });

  it("Upload invalid file size", () => {
    const file = "sample.png";
    const Parent = () => {
      const [email, setEmail] = useState({
        files: [],
      });

      return (
        <Upload
          setObjects={setEmail}
          objects={email}
          size={[1, "KB"]}
          types={["pdf", "jpg", "jpeg", "png"]}
        />
      );
    };

    cy.mount(<Parent />);
    cy.contains("attach");
    cy.get('[data-cy="upload-input"]')
      .find("input[type=file]")
      .selectFile("cypress/fixtures/files/" + file, { force: true });
    cy.get(`[data-cy="${file}"]`).should("not.exist");
  });

  it("Upload Invalid File", () => {
    const file = "sample.png";
    const Parent = () => {
      const [email, setEmail] = useState({
        files: [],
      });

      return (
        <Upload
          setObjects={setEmail}
          objects={email}
          size={[1, "MB"]}
          types={["pdf", "jpg", "jpeg", "png"]}
        />
      );
    };

    cy.mount(<Parent />);
    cy.contains("attach");
    cy.get('[data-cy="upload-input"]')
      .find("input[type=file]")
      .selectFile("cypress/fixtures/files/" + file, { force: true });
    cy.get('[data-cy="upload-input"]')
      .find("input[type=file]")
      .selectFile("cypress/fixtures/files/" + file, { force: true });
    cy.get(`[data-cy="${file}"]`).should("exist");
    cy.get('[data-cy="upload-list"]').should("have.length", 1);
  });

  it("Remove File", () => {
    const files = ["sample.pdf", "sample.jpeg", "sample.jpg", "sample.png"];
    const Parent = () => {
      const [email, setEmail] = useState({
        files: [],
      });

      return (
        <Upload
          setObjects={setEmail}
          objects={email}
          size={[1, "MB"]}
          types={["pdf", "jpg", "jpeg", "png"]}
        />
      );
    };

    cy.mount(<Parent />);
    cy.contains("attach");
    files.map((file) => {
      cy.get('[data-cy="upload-input"]')
        .find("input[type=file]")
        .selectFile("cypress/fixtures/files/" + file, { force: true });
    });

    files.map((file) => {
      cy.get(`[data-cy="${file}"]`).should("exist");
    });

    cy.get(`[data-cy="sample.pdf-delete"]`).click();

    files.map((file) => {
      cy.get(`[data-cy="${file}"]`).should(
        file === "sample.pdf" ? "not.exist" : "exist"
      );
    });
  });
});
