import {
  Given,
  When,
  Then,
  And,
  Before,
} from "cypress-cucumber-preprocessor/steps";
import login from "../POM/Pages/SwagLabsLogin/login";

import products from "../POM/Pages/SwagLabsProducts/products";

Given("I navigate to the SwagLabs - Saucedemo page", () => {
  cy.visit("https://www.saucedemo.com/");
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

And("I am on the Products screen", (datatable) => {
  datatable.hashes().forEach((el) => {
    products.screen(el.title);
  });
});

Then("I select the drop down and sort by Price - Low to High", () => {
  products.sortByPrice();
});
