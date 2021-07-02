import CartPage from "./CartPage";

class ProductsPage {
  addProductToCart(productName) {
    cy.contains(productName).parent().find("img").click();
    return this;
  }

  checkNumberOfCartElements(expected) {
    cy.findByTestId("cartSize").should("have.text", expected);
    return this;
  }

  navigateToCart() {
    cy.findByTestId("cartSize").click();
    return new CartPage();
  }
}

export default ProductsPage;
