import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
const loginPage = require('../../pages/login');

Given('I navigate to the SwagLabs - Saucedemo page', () => {
	cy.visit('/');
});

Given('I should now see the login screen', () => {
	loginPage.screen.should('be.visible');
});

When('I enter a username and password', datatable => {
	datatable.hashes().forEach(element => {
		cy.login(
			{
				username: `${element.username}`,
				password: `${element.password}`,
			},
			{ cacheSession: true }
		);
	});
});

When('a user enters username and password', table => {
	table.hashes().forEach(user => {
		loginPage.enterUsernamePassword({
			username: `${user.username}`,
			password: `${user.password}`,
		});
	});
});

When('entering in a {string} and {string}', (username, password) => {
	loginPage.reuseableLogin({ username: username, password: password });
});

Then('Now I should see the {string}', title => {
	loginPage.pageName(title);
});

Then('Now I should see - {string}', text => {
	loginPage.invalidUserError(text);
});
