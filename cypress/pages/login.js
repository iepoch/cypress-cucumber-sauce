class LoginPage {
	get screen() {
		return cy.get('[data-test=login-button]');
	}
	pageName(title) {
		return cy.contains(title).should('be.visible');
	}

	// -- REMOVED added Cypress Command for Login --//

	// enterUsernamePassword(username, password) {
	//   cy.get("[data-test=username]").clear();
	//   cy.get("[data-test=username]")
	//     .type(username)
	//     .should("have.value", username);

	//   cy.get("[data-test=password]").clear();
	//   cy.get("[data-test=password]")
	//     .type(password)
	//     .should("have.value", password);
	// }

	// Cached Sessions to Restore login
	reuseableLogin() {
		cy.login({ username: 'standard_user', password: 'secret_sauce' });
		cy.forceVisit('/inventory.html');
	}

	clickLoginButton() {
		return cy.get('[data-test=login-button]').click();
	}
	invalidUserError(text) {
		return cy.get('[data-test=error]').contains(text).should('be.visible');
	}
}

module.exports = new LoginPage();
