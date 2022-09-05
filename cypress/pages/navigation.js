class NavMenuPage {
	elements = {
		menu: () => cy.get('.bm-burger-button'),
		allItems: () => cy.get('#inventory_sidebar_link'),
		about: () => cy.get('#about_sidebar_link'),
		logOut: () => cy.get('#logout_sidebar_link'),
		resetApp: () => cy.get('#reset_sidebar_link'),
	};

	clickMenu() {
		this.elements.menu.click();
	}
}

module.exports = new NavMenuPage();
