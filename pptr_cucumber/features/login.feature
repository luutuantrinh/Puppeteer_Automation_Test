Feature: Login
    As a user 
    I can Login to application 

    Scenario: User can Login to application
        Given I open login page
        When I fill login form 
        And I click on submit button 
        Then I expect to see application  content
