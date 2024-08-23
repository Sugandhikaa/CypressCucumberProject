Feature: Home Page

  Scenario: Verify the title of the homepage
    Given I am on the homepage
    Then the title should be "Swag Labs"

  Scenario: Verify the visibility of key elements on the homepage
    Given I am on the homepage
    Then I should see the main banner
    And I should see the UserName Input and Password
    |UserName|password|
    |standard_user|secret_sauce|
    And I should see the featured products section

  Scenario: Search for a product from the homepage
    Given I am on the homepage
    When I search for "Laptop"
    Then I should see search results for "Laptop"

  Scenario: Navigate to a product category from the homepage
    Given I am on the homepage
    When I click on the "Electronics" category
    Then I should be redirected to the "Electronics" category page

