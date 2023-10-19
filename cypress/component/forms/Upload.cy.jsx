import Upload from "@/components/dynamic/forms/Upload";
import { useState } from "react";

describe("Forms Upload", () => {
  it("Upload valid PDF", () => {
    const file = "sample.pdf";
    const Parent = () => {
      const [user, setUser] = useState({ resume: "" });

      return (
        <Upload
          field="resume"
          user={user}
          setUser={setUser}
          text="Upload Resume"
          maxSize={[150, "KB"]}
          types={["pdf"]}
        />
      );
    };

    cy.mount(<Parent />);

    cy.contains("Upload Resume");
    cy.get('[data-cy="upload"]').contains("Upload from my computer");
    cy.get('[data-cy="upload-input"]')
      .find("input[type=file]")
      .selectFile("cypress/fixtures/files/" + file, { force: true });
    cy.get('[data-cy="upload-success"]').should("exist");
  });

  it("Upload invalid PDF (file size)", () => {
    const file = "sample.pdf";
    const Parent = () => {
      const [user, setUser] = useState({ resume: "" });

      return (
        <Upload
          field="resume"
          user={user}
          setUser={setUser}
          text="Upload Resume"
          maxSize={[1, "KB"]}
          types={["pdf"]}
        />
      );
    };

    cy.mount(<Parent />);

    cy.contains("Upload Resume");
    cy.get('[data-cy="upload"]').contains("Upload from my computer");
    cy.get('[data-cy="upload-input"]')
      .find("input[type=file]")
      .selectFile("cypress/fixtures/files/" + file, { force: true });
    cy.get('[data-cy="upload"]')
      .find('[data-cy="upload-success"]')
      .should("not.exist");
  });

  it("Upload valid PNG", () => {
    const file = "sample.png";
    const Parent = () => {
      const [judge, setJudge] = useState({ photo: "" });

      return (
        <Upload
          field="photo"
          user={judge}
          setUser={setJudge}
          text="Upload Photo"
          maxSize={[1, "MB"]}
          types={["png", "jpg", "jpeg"]}
        />
      );
    };

    cy.mount(<Parent />);

    cy.contains("Upload Photo");
    cy.get('[data-cy="upload"]').contains("Upload from my computer");
    cy.get('[data-cy="upload-input"]')
      .find("input[type=file]")
      .selectFile("cypress/fixtures/files/" + file, { force: true });
    cy.get('[data-cy="upload-success"]').should("exist");
  });

  it("Upload invalid PNG (file size)", () => {
    const file = "sample.png";
    const Parent = () => {
      const [judge, setJudge] = useState({ photo: "" });

      return (
        <Upload
          field="photo"
          user={judge}
          setUser={setJudge}
          text="Upload Photo"
          maxSize={[1, "KB"]}
          types={["png", "jpg", "jpeg"]}
        />
      );
    };

    cy.mount(<Parent />);

    cy.contains("Upload Photo");
    cy.get('[data-cy="upload"]').contains("Upload from my computer");
    cy.get('[data-cy="upload-input"]')
      .find("input[type=file]")
      .selectFile("cypress/fixtures/files/" + file, { force: true });
    cy.get('[data-cy="upload"]')
      .find('[data-cy="upload-success"]')
      .should("not.exist");
  });

  it("Upload valid JPEG", () => {
    const file = "sample.jpeg";
    const Parent = () => {
      const [judge, setJudge] = useState({ photo: "" });

      return (
        <Upload
          field="photo"
          user={judge}
          setUser={setJudge}
          text="Upload Photo"
          maxSize={[1, "MB"]}
          types={["png", "jpg", "jpeg"]}
        />
      );
    };

    cy.mount(<Parent />);

    cy.contains("Upload Photo");
    cy.get('[data-cy="upload"]').contains("Upload from my computer");
    cy.get('[data-cy="upload-input"]')
      .find("input[type=file]")
      .selectFile("cypress/fixtures/files/" + file, { force: true });
    cy.get('[data-cy="upload-success"]').should("exist");
  });

  it("Upload invalid JPEG (file size)", () => {
    const file = "sample.jpeg";
    const Parent = () => {
      const [judge, setJudge] = useState({ photo: "" });

      return (
        <Upload
          field="photo"
          user={judge}
          setUser={setJudge}
          text="Upload Photo"
          maxSize={[1, "KB"]}
          types={["png", "jpg", "jpeg"]}
        />
      );
    };

    cy.mount(<Parent />);

    cy.contains("Upload Photo");
    cy.get('[data-cy="upload"]').contains("Upload from my computer");
    cy.get('[data-cy="upload-input"]')
      .find("input[type=file]")
      .selectFile("cypress/fixtures/files/" + file, { force: true });
    cy.get('[data-cy="upload"]')
      .find('[data-cy="upload-success"]')
      .should("not.exist");
  });

  it("Remove file", () => {
    const file = "sample.jpeg";
    const Parent = () => {
      const [judge, setJudge] = useState({ photo: "" });

      return (
        <Upload
          field="photo"
          user={judge}
          setUser={setJudge}
          text="Upload Photo"
          maxSize={[1, "MB"]}
          types={["png", "jpg", "jpeg"]}
        />
      );
    };

    cy.mount(<Parent />);

    cy.contains("Upload Photo");
    cy.get('[data-cy="upload"]').contains("Upload from my computer");
    cy.get('[data-cy="upload-input"]')
      .find("input[type=file]")
      .selectFile("cypress/fixtures/files/" + file, { force: true });
    cy.get('[data-cy="upload-success"]').should("exist");
    cy.get('[data-cy="upload-success"]')
      .find('[data-cy="upload-cancel"]')
      .click();
    cy.get('[data-cy="upload"]')
      .find('[data-cy="upload-success"]')
      .should("not.exist");
  });
});
