// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add(
	'login',
	({ username, password }, { cacheSession = true } = {}) => {
		const login = () => {
			cy.visit('/');
			cy.get('[data-test=username]').type(username);
			cy.get('[data-test=password]').type(password);
			cy.get('[data-test=login-button]').click();

			cy.location('pathname').should('eq', '/inventory.html');
		};

		if (cacheSession) {
			cy.session({ username, password }, login);
		} else {
			login();
		}
	}
);

Cypress.Commands.add('forceVisit', url => {
	cy.window().then(win => {
		return win.open(url, '_self');
	});
});
Cypress.Commands.add('getSessionStorage', key => {
	cy.window().then(window => window.sessionStorage.getItem(key));
});
