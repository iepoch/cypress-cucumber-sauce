/*****
 * How to use a base page properly
 */
class BasePage {
	elements = {
		detailsName: () => cy.get('.inventory_details_name'),
		itemName: () => cy.get('.inventory_item_name'),
		detailsDesc: () => cy.get('.inventory_details_desc'),
		detailsPrice: () => cy.get('.inventory_details_price'),
		button: () => cy.get('.btn_inventory'),
		shoppingCart: () => cy.get('#shopping_cart_container'),
		cartBadge: () => cy.get('.shopping_cart_badge'),
	};

	name(text) {
		return this.elements
			.itemName()
			.each(($el, $indx, $lis) => {})
			.then($lis => {
				cy.get($lis).contains(text);
			})
			.click();
	}
	title() {
		return this.elements.detailsName();
	}
	description(description) {
		cy.log(description);
		return this.elements.detailsDesc().should('have.text', description);
	}
	price(price) {
		return this.elements.detailsPrice().should('have.text', price);
	}
	addToCartBtn(item) {
		return this.elements.button().should('have.text', 'Add to cart').click();
	}
	shoppingCart() {
		return this.elements.shoppingCart().should('contain', 1);
	}
	cartBadge() {
		return this.elements.cartBadge().should('be.empty');
	}
	remove() {
		return this.elements.button().should('have.text', 'Remove').click();
	}
}

export default BasePage;
