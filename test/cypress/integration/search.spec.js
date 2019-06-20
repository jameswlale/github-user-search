/// <reference types="Cypress" />

describe("User search form", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("focuses username on load", () => {
    cy.focused().should("have.attr", "data-cy", "username");
  });

  it("does not submit with empty field", () => {
    cy.get("[data-cy=username]");
  });

  it("performs a search for a given username with a valid url", () => {
    cy.get("[data-cy=username]")
      .type("jameswlale")
      .closest("form")
      .submit();

    cy.url().should("contain", "/users/jameswlale");
  });
});
