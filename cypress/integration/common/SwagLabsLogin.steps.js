import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import login from '../POM/Pages/SwagLabsLogin/login';

Given('I navigate to the SwagLabs - Saucedemo page', () => {
	cy.visit('/');
});

Given('I should now see the login screen', () => {
	login.screen.should('be.visible');
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

And('Now I should see the Products page', datatable => {
	login.reuseableLogin();
	datatable.hashes().forEach(el => {
		login.pageName(el.title);
	});
});

And('Now I should see - {string}', text => {
	login.invalidUserError(text);
});
