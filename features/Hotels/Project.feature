Feature: Project

    @projectCase6 @project
    Scenario: TC-25 Verify user can submit feedback after completing the feedback form
        Given I am on hotels homepage
        When I Click on Signin link
        And I Click “Feedback”
        And I Select any star-rating
        And I Enter any comments
        And I Select any option for “How likely are you to return to Hotels.com”
        And I Select any answer for “Prior to this visit, have you ever booked on Hotels.com”
        And I Select any answer for ”Did you accomplish what you wanted to do on this page”
        And I Click on Submit button
        Then I Verify “THANK YOU FOR YOUR FEEDBACK.“ is displayed
   
    @projectCase7 @project
    Scenario: TC-28  Verify Child-age dropdowns are same as number of Children selected
        Given I am on hotels homepage
        When I Click on Travelers
        And I Select “Children” as 2
        Then I Verify Children-age dropdown are 2
        And I Verify Plus-button is enabled and I Verify minus-button is enabled
        When I Select “Children” as 6
        Then I Verify Children-age dropdown are 6
        And I Verify Plus button is disabled
        And I Verify minus-button is enabled
        When I Select “Children” as 5
        Then I Verify Children-age dropdown are 5
        And I Verify Plus button is enabled again
        And I Verify Minus button is enabled again
        When I Select “Children” as 0
        Then I Verify Children-age dropdown is NOT displayed
        And I Verify Plus button is enabled once more
        And I Verify minus-button is disabled again
   
   
    @projectCase8 @project2
    Scenario: TC-17 Verify past dates and back button on Current month's calendar is disabled
        Given I am on hotels homepage
        When I Click on Dates
        And I Go to current month if not displayed
        Then I Verify For current month
        And I check Past dates, if any, are disabled.
        And Back button on current month is disabled
   
   
    @projectCase9 @project2
    Scenario: TC-29 Verify "List your Property" flow
        Given I am on hotels homepage
        When I Click on “List your property”
        Then I Verify “What would you like to list” is displayed
        And I Verify “Lodging“ and “Private residence“ options are displayed
        When I Click on “Private residence“
        Then I Verify ”Step 1 of 3” is displayed
        And I Verify “See how much you could earn!” is displayed
        When I Enter “4“ as bedroom
        And I Enter “2.5“ as bathroom
        And I Click on “Next” button
        Then I Verify ”Step 2 of 3” is displayed
        And I Verify “Where is your property located” is displayed
        When I enter “121” in address
        And Select “1211 6th Avenue, New York, NY, USA” from auto-suggestion
        Then I Verify graph is displayed
        And I Verify pin in graph is displayed
        And I Verify “Pin location may not be exact.“ is displayed below graph
  
  
    @projectCase10 @project2
    Scenario: TC-30 Verify invalid phone number error
        Given I am on hotels homepage
        When I Scroll to “Get the app“ button
        And I Enter “0000000000” in Phone number
        And I Click on “Get the app“ button
        Then I Verify “Please enter a valid phone number.“ error is displayed
   
   
    @projectCase11 @project2
    Scenario: TC-23 Verify filter-by and sort-by functionality works as expected
        Given I am on hotels homepage
        When I Search Manhattan, NY
        And I Enter Check-in date as Jan-10-2023
        And I Enter Check-in date as Jan-23-2023
        And I Click on Search button
        And I Click on 5 from star-rating filter
        When I Select “Price” from sort-by dropdown
        Then I Verify all hotels in search results are 5-rated as selected in above step
        And I Verify all hotels are listed in increasing order of price.
    
    
    @projectCase12 @project2
    Scenario: TC-19 Verify Share feedback button is displayed at the end of search results
        Given I am on hotels homepage
        When I Enter “bora” in destination
        And I Select “Bora Bora, Leeward Islands, French Polynesia” from auto suggestion
        And I Select December 1, 2022 as Check-in
        And I Select December 10, 2022 as Check-out
        When I Click Apply
        And I Click on “Search” button
        Then I Verify at the end of search results: Text: Tell us how we can improve our site is displayed
        And Button Share feedback is displayed and enabled
   
   
    @projectCase13 @project2
    Scenario: TC-31 Verify language can be changed successfully
        Given I am on hotels homepage
        When I Click on “English“ language
        And I Select “Español Estados Unidos” in Language dropdown
        And I Click on “Save“ button
        Then I Verify “Español” is displayed
        When I Click on “Español“ language
        And I Select “English United States” in Language dropdown
        And I Click on “Guardar“ button
        Then I Verify “English” is displayed