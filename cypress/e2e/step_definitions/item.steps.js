import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

const inventoryPage = require('../../pages/inventory-item');

When('on the inventory page', () => {
	cy.forceVisit('/inventory.html');
});
Then('I can see product title as {string}', title => {
	inventoryPage.name(title);
});
Then('I see the product description as {string}', description => {
	inventoryPage.description(description);
});
Then('I also see the product price as {string}', price => {
	inventoryPage.price(price);
});
Then('I can click Add To Cart for {string}', () => {
	inventoryPage.addToCartBtn();
});

Then('see 1 item is showing on the cart icon', () => {
	inventoryPage.shoppingCart();
});

Then('I can click remove', () => {
	inventoryPage.remove();
});

Then('I can see 1 items is removed on the cart badge', () => {
	inventoryPage.cartBadge();
});
