Feature: NumberofGuest

    
    Scenario: Verify user can update number of guests on Home page
        Given I am on hotels homepage
        When I Click on Travelers
        When I Select “Adults" as 6
        And I Select “Children” as 3
        And I Select first child age: 4
        And I Select second child age: Under 1
        And I Select third child age: 7
        When I Click Done
        Then I Verify total number of guests in sum of adults and children as same as selected on step #3 and #4.