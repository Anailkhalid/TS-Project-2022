Feature: Terms and conditions

Scenario: Verify TermsAndConditions link and PrivacyStatements link open correct page on new tab
        Given I am on hotels homepage
        When I Click on Signin link
        And I Click on SignUp link
        And I Click “Terms and Conditions” link
        Then I Verify “Terms and Conditions” page opens in new tab
        When I Click “Privacy Statement” link
        Then I Verify “Privacy Statement” page opens in new tab