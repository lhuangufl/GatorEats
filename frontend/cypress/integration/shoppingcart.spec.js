/// <reference types="cypress" />

describe("user signin", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/cart");
  });
  it("shoud have the following components", () => {
    cy.get("div").contains("GatorEats");
    cy.contains("Restaurant");
    cy.contains("Orders");
    cy.contains("Shopping Cart");
    cy.contains("Account");
    cy.get("#search");
    cy.get("div").contains("Search");
  });
});
