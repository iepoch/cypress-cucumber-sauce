import {
  Given,
  When,
  Then,
  And,
  Before,
} from "cypress-cucumber-preprocessor/steps";
import login from "../POM/Pages/ActivitiesLogin/login";

Given("I navigate to the SwagLabs - Saucedemo page", () => {
  cy.visit("https://www.saucedemo.com");
});

Given("I should now see the login screen", () => {
  login.screen.should("be.visible");
});

When("I enter a username and password", (datatable) => {
  datatable.hashes().forEach((element) => {
    login.enterUsernamePassword(element.username, element.password);
  });
});

Then("I can click the login button to login", () => {
  login.clickLoginButton();
});
And("Now I should see the Products page", (datatable) => {
  datatable.hashes().forEach((el) => {
    login.pageName(el.title);
  });
});

And(
  "Now I should see - Epic sadface: Sorry, this user has been locked out.",
  () => {
    login.invalidUserError();
  }
);
