Feature: Saucedemo Product Page Validation

    Background: Login to the page
        Given I navigate to the SwagLabs - Saucedemo page
        Then I reuse my login to login to the page

    @regression
    Scenario: "<testId>": Inventory Item is displayed with correct description

        When on the inventory page
        Then I can see product title as "<title>"
        Then I see the product description as "<description>"
        And I also see the product price as "<price>"
        Then I can click Add To Cart for "<item>"
        And see 1 item is showing on the cart icon
        Then I can click remove
        And I can see 1 item is removed on the cart badge


        Examples:
            | testId | title                   | description                                                                                                                                                     | price  |
            | TC001  | Sauce Labs Backpack     | carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.                          | $29.99 |
            | TC002  | Sauce Labs Bike Light   | A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included. | $9.99  |
            | TC003  | Sauce Labs Bolt T-Shirt | Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.                 | $15.99 |
