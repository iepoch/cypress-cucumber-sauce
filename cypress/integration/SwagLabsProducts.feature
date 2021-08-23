Feature: Saucedemo Product Page Validation

    Background: Login to the page
        Given I navigate to the SwagLabs - Saucedemo page
        When  I enter a username and password
            | username      | password     |
            | standard_user | secret_sauce |

        Then I can click the login button to login

    @regression
    Scenario: Sort By Price on Product Page

        And I am on the Products screen
            | title    |
            | Products |
        When I get the original prices on the screen
        Then I select the drop down and sort by Price - Low to High
        And The prices are now sorted


    Scenario: Check the Product Page Items Are Valid
        And I am on the Products screen
            | title    |
            | Products |
        Then I can validate the items on the page
            | productlist                       |
            | Sauce Labs Backpack               |
            | Sauce Labs Bike Light             |
            | Sauce Labs Bolt T-Shirt           |
            | Sauce Labs Fleece Jacket          |
            | Sauce Labs Onesie                 |
            | Test.allTheThings() T-Shirt (Red) |