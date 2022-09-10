import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
const productsPage = require('../../pages/products');
const loginPage = require('../../pages/login');

Then('I reuse my login to login to the page', (username, password) => {
	loginPage.reuseableLogin({
		username: 'standard_user',
		password: 'secret_sauce',
	});
});

When('I get the original prices on the screen', () => {
	productsPage.unsortedPrice();
});
Then('I select the drop down and sort by Price - Low to High', () => {
	productsPage.sortByPrice();
});

Then(
	'I select the drop down and sort by {string} and {string}',
	(sort, value) => {
		productsPage.sortPrice(sort, value);
	}
);

Then('I can validate the items on the page', datatable => {
	datatable.hashes().forEach(el => {
		productsPage.checkAllProducts(el.productlist);
	});
});
Then('Product name is not sorted yet', () => {
	productsPage.sortAtoZ();
});

Then('The name are now sorted', () => {
	productsPage.sortedAtoZ();
});

Then('The prices are now sorted', () => {
	productsPage.pricesSorted(); // new testing for sortBy
});

Then('Images have the correct image associated with product', () => {
	productsPage.checkImage();
});
