import PaymentPage from "./PaymentPage";

const testAddress = {
  firstName: "John",
  lastName: "Snow",
  street: "Castle Black",
  postalCode: "00-000",
  city: "The North",
};

class AddressPage {
  fillInAddress(address = testAddress) {
    cy.findByPlaceholderText("First name").type(address.firstName);
    cy.findByPlaceholderText("Last name").type(address.lastName);
    cy.findByPlaceholderText("Street").type(address.street);
    cy.findByPlaceholderText("Postal code").type(address.postalCode);
    cy.findByPlaceholderText("City").type(address.city);
    return this;
  }

  navigateToPayment() {
    cy.contains("Payment").click();
    return new PaymentPage();
  }
}

export default AddressPage;
