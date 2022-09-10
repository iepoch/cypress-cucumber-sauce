class NavMenuPage {
	elements = {
		menu: () => cy.get('.bm-burger-button'),
		allItems: () => cy.get('#inventory_sidebar_link'),
		about: () => cy.get('#about_sidebar_link'),
		logOut: () => cy.get('#logout_sidebar_link'),
		resetApp: () => cy.get('#reset_sidebar_link'),
		appLogo: () => cy.get('.app_logo'),
	};

	clickMenu() {
		return this.elements.menu().click();
	}
	signOut() {
		return this.elements.logOut().click();
	}
	logo() {
		return this.elements.appLogo().should('be.visible');
	}
}

export default NavMenuPage;
