import { Given, When, And } from 'cypress-cucumber-preprocessor/steps';
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

And('Now I should see the {string}', title => {
	login.reuseableLogin();
	login.pageName(title);
});

And('Now I should see - {string}', text => {
	login.invalidUserError(text);
});
