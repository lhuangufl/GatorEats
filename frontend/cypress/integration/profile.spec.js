/// <reference types="cypress" />

describe("user signin", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/profile");
  });
  it("shoud have the following components", () => {
    cy.get("div").contains("GatorEats");
    cy.contains("Restaurant");
    cy.contains("Orders");
    cy.contains("Shopping Cart");
    cy.contains("Account");
    cy.get("#search");
    cy.get("div").contains("Search");
    cy.contains("Email");
    cy.get("#email");
    cy.contains("Password");
    cy.get("#password");
    cy.contains("Address");
    cy.get("#address");
    cy.contains("Address 2");
    cy.get("#address2");
    cy.contains("City");
    cy.get("#city");
    cy.contains("State");
    cy.contains("Zip");
    cy.get("#zipcode");
  });
});
