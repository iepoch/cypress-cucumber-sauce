Feature: Saucedemo Product Page Validation

    Background: Login to the page
        Given I navigate to the SwagLabs - Saucedemo page
        Then I reuse my login to login to the page


    @regression
    Scenario: Sort By Price on Product Page

        Then Now I should see the "Products"
        When I get the original prices on the screen
        Then I select the drop down and sort by Price - Low to High
        And The prices are now sorted

    ## This should create 2 Examples. Which becomes 2 Test cases for different sorting by Price ( Reuseable Clearn Code)
    Scenario: Sort By "<sort>" on Product Page

        Then Now I should see the "Products"
        When I get the original prices on the screen
        Then Product name is not sorted yet
        Then I select the drop down and sort by "<sort>" and "<value>"
        And The prices are now sorted
        And The name are now sorted

        Examples:
            | sort                | value |
            | Price (high to low) | hilo  |
            | Price (low to high) | lohi  |


    Scenario: Sort By "<sort>" on Product Page

        Then Now I should see the "Products"
        Then Product name is not sorted yet
        Then I select the drop down and sort by "<sort>" and "<value>"
        And The name are now sorted

        Examples:
            | sort          | value |
            | Name (A to Z) | az    |
            | Name (Z to A) | za    |




    Scenario Outline: Check the product page items' title are valid
        Then Now I should see the "Products"
        And I can validate the items on the page
            | productlist                       |
            | Sauce Labs Backpack               |
            | Sauce Labs Bike Light             |
            | Sauce Labs Bolt T-Shirt           |
            | Sauce Labs Fleece Jacket          |
            | Sauce Labs Onesie                 |
            | Test.allTheThings() T-Shirt (Red) |





    Scenario: Check Product Images are not 404 not found images
        And Now I should see the "Products"
        And Images have the correct image associated with product





