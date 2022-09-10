import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
const productsPage = require('../../pages/products');
const loginPage = require('../../pages/login');

When('on the inventory page', () => {});
Then('I can see product title as {string}', title => {});
Then('I see the product description as {string}', description => {});
Then('I also see the product price as {string}', () => {});
Then('I can click Add To Cart', () => {});

Then('see 1 item is showing on the cart icon', () => {});
