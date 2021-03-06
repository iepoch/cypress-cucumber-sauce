import { When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import products from '../POM/Pages/SwagLabsProducts/products';
import login from '../POM/Pages/SwagLabsLogin/login';

And('I reuse my login to login to the page', () => {
	login.reuseableLogin();
});
// And('Now I should see the {string}', title => {
// 	products.screen(title);
// });

When('I get the original prices on the screen', () => {
	products.unsortedPrice();
});
Then('I select the drop down and sort by Price - Low to High', () => {
	products.sortByPrice();
});

Then('I can validate the items on the page', datatable => {
	datatable.hashes().forEach(el => {
		products.checkAllProducts(el.productlist);
	});
});

And('The prices are now sorted', () => {
	products.pricesSorted();
});
