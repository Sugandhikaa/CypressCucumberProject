const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("I am on empty home page", () => {
  cy.visit("https://practicetestautomation.com/practice-test-login/");
});

When("I type and submit in the board name", (dataTable) => {
  dataTable.hashes().forEach((element) => {
    cy.get("#username").type(element.UserName);
    cy.get("#password").type(element.password);
    cy.get("#submit").click();
  });});
 


Then("I should be redirected to the board detail", () => {
    cy.get(".post-title");
});
