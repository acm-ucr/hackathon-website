import Event from "@/components/admin/services/calendar/Event";

describe("Event test", () => {
  it("Event", () => {
    const event = {
      start: new Date().toISOString(),
      summary: "Test Event",
    };
    const view = "month";

    cy.mount(<Event event={event} view={view} />);
    cy.get('[data-cy="event"]').should(
      "have.class",
      "text-xs",
      "have.timeString",
      "have.summary",
    );
    cy.get('[data-cy="event"]').contains("Event");
  });

  it("Empty view", () => {
    const event = {
      summary: "test",
    };

    cy.mount(<Event event={event} />);
    cy.get('[data-cy="event"]').should("have.class", "text-xs", "have.summary");
  });

  it("Empty summary", () => {
    const event = {
      start: new Date().toISOString(),
      summary: "",
    };
    const view = "month";

    cy.mount(<Event event={event} view={view} />);
    cy.get('[data-cy="event"]').should(
      "have.class",
      "text-xs",
      "have.timeString",
      "have.summary",
    );
  });

  it("Different view", () => {
    const event = {
      summary: "test",
    };
    const view = "not month";

    cy.mount(<Event event={event} view={view} />);
    cy.get('[data-cy="event"]').should("have.class", "text-xs", "have.summary");
  });
});
