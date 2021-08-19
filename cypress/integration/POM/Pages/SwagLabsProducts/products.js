let unsortedPrices = [];
class ProductsPage {
  screen(title) {
    return cy.contains(title).should("be.visible");
  }

  sortByPrice() {
    cy.get("[data-test=product_sort_container]").should("be.visible");
    cy.get("[data-test=product_sort_container]").select("Price (low to high)");
    cy.get("[data-test=product_sort_container]").should("have.value", "lohi");
  }

  unsortedPrice() {
    cy.get("#inventory_container").within(() => {
      cy.get(".inventory_item_description > .pricebar .inventory_item_price")
        .each(($el, $index, $lis) => {
          return "something else";
        })
        .then(($lis) => {
          return (unsortedPrices = $lis.text().split("$"));
        });
    });
  }

  pricesSorted() {
    cy.get("#inventory_container").within(() => {
      cy.get(".inventory_list").children().should("have.length", 6);
      cy.get(".inventory_item_description > .pricebar .inventory_item_price")
        .each(($el, $index, $lis) => {
          return "something else";
        })
        .then(($lis) => {
          const sortedPrice = $lis.text().split("$");
          expect(sortedPrice, "Prices are sorted").to.not.equal(unsortedPrices);
        });
    });
  }

  checkAllProducts() {
    cy.get("#inventory_container").within(() => {
      cy.get(".inventory_item_name")
        .each(($el, $index, $lis) => {
          return "something else";
        })
        .then(($lis) => {
          expect($lis.eq(0), "first item").to.contain("Sauce Labs Backpack");
          expect($lis.eq(1), "second item").to.contain("Sauce Labs Bike Light");
          expect($lis.eq(2), "third item").to.contain(
            "Sauce Labs Bolt T-Shirt"
          );
          expect($lis.eq(3), "fouth item").to.contain(
            "Sauce Labs Fleece Jacket"
          );
          expect($lis.eq(4), "fith item").to.contain("Sauce Labs Onesie");
          expect($lis.eq(5), "sixth item").to.contain(
            "Test.allTheThings() T-Shirt (Red)"
          );
        });
    });
  }
}

const products = new ProductsPage();
export default products;
