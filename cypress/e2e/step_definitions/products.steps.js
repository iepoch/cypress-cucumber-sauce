import { When, Then, And } from '@badeball/cypress-cucumber-preprocessor';
const productsPage = require('../../pages/products');
const loginPage = require('../../pages/login');

And('I reuse my login to login to the page', () => {
	loginPage.reuseableLogin();
});
// And('Now I should see the {string}', title => {
// 	products.screen(title);
// });

When('I get the original prices on the screen', () => {
	productsPage.unsortedPrice();
});
Then('I select the drop down and sort by Price - Low to High', () => {
	productsPage.sortByPrice();
});

Then('I can validate the items on the page', datatable => {
	datatable.hashes().forEach(el => {
		productsPage.checkAllProducts(el.productlist);
	});
});

And('The prices are now sorted', () => {
	productsPage.pricesSorted();
});
