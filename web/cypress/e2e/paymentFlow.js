import ProductsPage from "../pages/ProductsPage";

describe("Payment flow", () => {
  it("successfully completes payment with USD", () => {
    cy.visit("/");
    const productsPage = new ProductsPage();
    const cartPage = productsPage
      .addProductToCart("Sports shoes - Adidas")
      .checkNumberOfCartElements(1)
      .navigateToCart();

    const addressPage = cartPage.navigateToAddress();

    const paymentPage = addressPage.fillInAddress().navigateToPayment();

    paymentPage.fillInCardDetails().checkTotal("73.57 $").pay();
  });
});
