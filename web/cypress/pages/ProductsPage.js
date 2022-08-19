class ProductsPage {
  navigateToProductsPage() {
    cy.visit("/");
    return this;
  }

  verifyProductExistence(product) {
    cy.contains(product);
  }
}

export default ProductsPage;
