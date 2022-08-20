import ProductsPage from "./ProductsPage";

class AdminProductsPage {
  removeProduct(product) {
    cy.findByText(product)
      .parent()
      .parent()
      .find("button", { name: "Remove" })
      .click();

    return this;
  }

  verifyExistence(product, shouldExist) {
    cy.contains(product).should(shouldExist ? "exist" : "not.exist");

    return this;
  }

  addNew(product) {
    cy.findByRole("button", { name: "Add new product" }).click();

    cy.findByPlaceholderText("Product name in Polish").type(product.namePL);
    cy.findByPlaceholderText("Product name in English").type(product.nameENG);
    cy.findByPlaceholderText("Brand").type(product.brand);
    cy.findByPlaceholderText("Price in cents (USD)").type(product.priceUSD);
    cy.findByPlaceholderText("Price in eurocents (EUR)").type(product.priceEUR);
    cy.findByPlaceholderText("Price in grosze (PLN)").type(product.pricePLN);

    cy.findByRole("button", { name: "Save" }).click();

    return this;
  }

  logout() {
    cy.findByRole("button", { name: "Logout" }).click();

    return new ProductsPage();
  }
}

export default AdminProductsPage;
