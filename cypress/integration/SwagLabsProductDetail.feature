Feature: Saucedemo
    @skip
    Background: Login to Saucedemo
        Given I navigate to the SwagLabs - Saucedemo page
        Given I should now see the login screen
        When I enter a username and password
            | username      | password     |
            | standard_user | secret_sauce |
        Then I can click the login button to login
    @skip
    Scenario: Check the Product Details Screen
        And I am on the Products screen
            | title    |
            | Products |
        Then I can validate the items on the page
            | productlist                       |
            | Sauce Labs Backpack               |
            | Sauce Labs Back Light             |
            | Sauce Labs Bolt T-Shirt           |
            | Sacuce Labs Fleece Jacket         |
            | Sauce Labs Onesie                 |
            | Test.allTheThings().T-Shirt (Red) |
