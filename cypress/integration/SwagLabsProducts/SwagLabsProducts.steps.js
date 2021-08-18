import { When, Then, And } from "cypress-cucumber-preprocessor/steps";
import products from "../POM/Pages/SwagLabsProducts/products";

And("I am on the Products screen", (datatable) => {
  datatable.hashes().forEach((el) => {
    products.screen(el.title);
  });
});

When("I get the original prices on the screen", () => {
  products.unsortedPrice();
});
Then("I select the drop down and sort by Price - Low to High", () => {
  products.sortByPrice();
});

And("The prices are now sorted", () => {
  products.pricesSorted();
});
