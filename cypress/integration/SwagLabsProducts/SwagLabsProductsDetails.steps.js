import { Then, And } from "cypress-cucumber-preprocessor/steps";
import products from "../POM/Pages/SwagLabsProducts/products";

And("I am on the Products screen", (datatable) => {
  datatable.hashes().forEach((el) => {
    products.screen(el.title);
  });
});

// Then("I can validate the items on the page", (datatable) => {
//   datatable.hashes().forEach((el) => {
//     products.checkAllProducts(el.productlist);
//   });
// });
