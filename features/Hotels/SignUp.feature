Feature: Signup

Scenario: Verify error message for invalid data in SignUp form
        Given I am on hotels homepage
        When I Click on Signin link
        And I Click on SignUp link
        When Enter invalid email address with at least '@' symbol
        Then -> Verify error is displayed 'Enter a valid email address'
        And Enter invalid first name
        Then -> Verify error is displayed 'First name cannot contain special characters'
        And Enter invalid last name
        Then -> Verify error is displayed 'Last name cannot contain special characters'
        When I Enter password
        Then Verify “Keep me signed in” checkbox is displayed and enabled
        And Verify “Continue” button is displayed but NOT enabled