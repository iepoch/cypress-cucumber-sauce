Feature: Saucedemo Product Page Validation

    Background: Login to the page
        Given I navigate to the SwagLabs - Saucedemo page
        When  I enter a username and password
         | username      | password        |
         | problem_user  | secret_sauce    |

        Then I can click the login button to login
        
 @regression
    Scenario: Sort By Price on Product Page

        And I am on the Products screen
           | title    |
           | Products |
        Then I select the drop down and sort by Price - Low to High