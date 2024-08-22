Feature: Board functionality

  Scenario: Create a board
    Given I am on empty home page
    When I type and submit in the board name
    |UserName|password|
    |student|Password123|
    Then I should be redirected to the board detail
