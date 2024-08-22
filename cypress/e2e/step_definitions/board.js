const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("I am on empty home page", () => {
  cy.visit("https://practicetestautomation.com/practice-test-login/");
});

When("I type and submit in the board name", () => {
  cy.get("#username").type('student');
  cy.get("#password").type("Password123");
  cy.get("#submit").click();
});

Then("I should be redirected to the board detail", () => {
    cy.get(".post-title");
});
