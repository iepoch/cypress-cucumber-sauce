let unsortedPrices = [];
let unsortedProductName = [];
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

	// This is a universal method. So you can pass any sort filter name into it with it's value.
	// Cleaner code
	sortPrice(sort, value) {
		cy.get('[data-test=product_sort_container]').should('be.visible');
		cy.get('[data-test=product_sort_container]').select(sort);
		cy.get('[data-test=product_sort_container]').should('have.value', value);
	}

	// I am getting the unsorted prices before I sort the page.
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
	// Here i am taking the unsorted and making it sorted prices then I validate that the now sorted prices
	// and I am expecting that now that I have change my sort options the sorted prices do not match the previous unsorted.
	pricesSorted() {
		cy.get('#inventory_container').within(() => {
			cy.get('.inventory_item_description > .pricebar .inventory_item_price')
				.each(($el, $index, $lis) => {
					return 'something else';
				})
				.then($lis => {
					const sortedPrice = $lis.text().split('$');
					expect(sortedPrice, 'Prices are sorted').to.not.equal(
						unsortedPrices,
						'Should not equal the unsorted prices'
					);
				});
		});
	}

	checkAllProducts(productlist) {
		cy.get('div.inventory_item_name').contains(productlist);
	}

	sortAtoZ() {
		cy.get('.inventory_item_name')
			.each(($el, $index, $lis) => {
				return 'unsorted';
			})
			.then($lis => {
				return (unsortedProductName = $lis.text().split());
			});
		cy.log(unsortedProductName);
	}
	sortedAtoZ() {
		cy.get('.inventory_item_name')
			.each(($el, $index, $lis) => {
				return 'unsorted';
			})
			.then($lis => {
				const sortedName = $lis.text().split();

				expect(sortedName, 'Name is sorted').to.not.equal(
					unsortedProductName,
					'Should not equal unsorted product name'
				);
			});
	}

	checkImage() {
		cy.get('div.inventory_list').within(() => {
			cy.get('div.inventory_item')
				.each(($el, $index, $lis) => {
					return 'something else';
				})
				.then($lis => {
					let img = [];
					for (let i = 0; i <= 5; i++) {
						img = $lis[i].children[0].firstChild.children[0].currentSrc;
						console.log($lis[i])
						expect(img).to.not.contain('404');
					}
				});
		});
	}
}

module.exports = new ProductsPage();
