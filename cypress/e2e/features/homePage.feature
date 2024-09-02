Feature: Home Page

  Scenario: Verify the title of the homepage
    Given I am on the homepage
    Then the title should be "Swag Labs"

  Scenario: Verify the visibility of key elements on the homepage
    Given I am on the homepage
    Then I should see the main banner
    And I should see the UserName Input and Password text box
   

