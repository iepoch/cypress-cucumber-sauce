/******
 * How to extend a page to another page
 * this can be useful for a base page and is and example how to extend
 * the page
 */
import NavMenuPage from './navigation';
const menuPage = new NavMenuPage();
class LoginPage extends NavMenuPage {
	get screen() {
		return cy.get('[data-test=login-button]');
	}
	pageName(title) {
		return cy.contains(title).should('be.visible');
	}

	enterUsernamePassword({ username, password }) {
		cy.log('username:', username, 'password', password);
		cy.get('[data-test=username]').clear();
		cy.get('[data-test=username]')
			.type(username)
			.should('have.value', username);

		cy.get('[data-test=password]').clear();
		cy.get('[data-test=password]')
			.type(password)
			.should('have.value', password);
		cy.get('[data-test=login-button]').click();
	}

	// Cached Sessions to Restore login
	reuseableLogin(username, password) {
		cy.login(username, password);
		cy.forceVisit('/inventory.html');
	}

	clickLoginButton() {
		return cy.get('[data-test=login-button]').click();
	}
	invalidUserError(text) {
		return cy.get('h3[data-test=error]').contains(text).should('be.visible');
	}

	/******
	 * How to use the extend a page functionality to re-use test
	 */
	appLogo() {
		menuPage.logo();
		menuPage.clickMenu();
		menuPage.signOut();
	}
}

module.exports = new LoginPage();
