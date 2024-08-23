import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { homePage } from '../pages/homePage';

Given("I am on the homepage", () => {
  cy.visit("https://www.saucedemo.com/");
});

Then("the title should be {string}", (expectedTitle) => {
  cy.title().should('eq', expectedTitle);
});

Then("I should see the main banner", () => {
 homePage.checkMainBannerVisible();
});

Then("I should see the UserName Input and Password", () => {
  cy.get("#search-bar").should('be.visible');
});

Then("I should see the featured products section", () => {
  cy.get(".featured-products").should('be.visible');
});

When("I search for {string}", (product) => {
  cy.get("#search-bar").type(product);
  cy.get("#search-button").click();
});

Then("I should see search results for {string}", (product) => {
  cy.get(".search-results").should('contain', product);
});

When("I click on the {string} category", (category) => {
  cy.get(`a[title="${category}"]`).click();
});

Then("I should be redirected to the {string} category page", (category) => {
  cy.url().should('include', `/category/${category.toLowerCase()}`);
});
