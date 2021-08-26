let unsortedPrices = [];
class ProductsPage {
	screen(title) {
		cy.location('pathname').should('eq', '/inventory.html');
		cy.contains(title).should('be.visible');
	}

	sortByPrice() {
		cy.get('[data-test=product_sort_container]').should('be.visible');
		cy.get('[data-test=product_sort_container]').select('Price (low to high)');
		cy.get('[data-test=product_sort_container]').should('have.value', 'lohi');
	}

	unsortedPrice() {
		cy.get('#inventory_container').within(() => {
			cy.get('.inventory_item_description > .pricebar .inventory_item_price')
				.each(($el, $index, $lis) => {
					return 'something else';
				})
				.then($lis => {
					return (unsortedPrices = $lis.text().split('$'));
				});
		});
	}

	pricesSorted() {
		cy.get('#inventory_container').within(() => {
			cy.get('.inventory_list').children().should('have.length', 6);
			cy.get('.inventory_item_description > .pricebar .inventory_item_price')
				.each(($el, $index, $lis) => {
					return 'something else';
				})
				.then($lis => {
					const sortedPrice = $lis.text().split('$');
					expect(sortedPrice, 'Prices are sorted').to.not.equal(unsortedPrices);
				});
		});
	}

	checkAllProducts(productlist) {
		cy.get('.inventory_item_name').contains(productlist);
	}
}

const products = new ProductsPage();
export default products;
