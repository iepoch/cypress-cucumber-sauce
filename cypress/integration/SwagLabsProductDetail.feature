Feature: Saucedemo

    Background: Login to Saucedemo
        Given I navigate to the SwagLabs - Saucedemo page
        Given I should now see the login screen
        When I enter a username and password
            | username      | password     |
            | standard_user | secret_sauce |
        Then I can click the login button to login

    Scenario: Check the Product Details Screen
# And I am on the product details screen
#     | title    |
#     | Products |