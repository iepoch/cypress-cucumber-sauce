Feature: Saucedemo Product Page Validation

    Background: Login to the page
        Given I navigate to the SwagLabs - Saucedemo page
        Then I reuse my login to login to the page

    @regression
    Scenario: Inventory Item is displayed with correct description

        When on the inventory page
        Then I can see product title as "<title>"
        Then I see the product description as "<description>"
        Then I also see the product price as "<price>"
        Then I can click Add To Cart
        And see 1 item is showing on the cart icon