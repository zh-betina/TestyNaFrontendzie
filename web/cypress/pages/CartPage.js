import AddressPage from "./AddressPage";

class CartPage {
  navigateToAddress() {
    cy.contains("Address").click();
    return new AddressPage();
  }
}

export default CartPage;
