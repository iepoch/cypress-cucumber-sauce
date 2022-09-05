Feature: Saucedemo Product Page Validation

    Background: Login to the page
        Given I navigate to the SwagLabs - Saucedemo page
    And I reuse my login to login to the page


    @regression
    Scenario Outline: Sort By Price on Product Page

        Then Now I should see the "<title>"
        When I get the original prices on the screen
        Then I select the drop down and sort by Price - Low to High
        And The prices are now sorted

        Examples:
            | title    |
            | Products |


    Scenario Outline: Check the product page items' title are valid
        Then Now I should see the "<title>"
            And I can validate the items on the page
            | productlist                       |
            | Sauce Labs Backpack               |
            | Sauce Labs Bike Light             |
            | Sauce Labs Bolt T-Shirt           |
            | Sauce Labs Fleece Jacket          |
            | Sauce Labs Onesie                 |
            | Test.allTheThings() T-Shirt (Red) |



        Examples:
            | title    |
            | Products |


    Scenario Outline: Check Product Images are not 404 not found images
        Then Now I should see the "<title>"
        Then Images have the correct image associated with product

        Examples:
            | title    |
            | Products |
