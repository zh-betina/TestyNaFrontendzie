import SuccessPage from "./SuccessPage";

const testCard = {
  cardNumber: "4242424242424242",
  cardExpiry: "1025",
  cardCvc: "123",
  postalCode: "00000",
};
class PaymentPage {
  fillInCardDetails(cardDetails = testCard) {
    cy.fillElementsInput("cardNumber", cardDetails.cardNumber);
    cy.fillElementsInput("cardExpiry", cardDetails.cardExpiry);
    cy.fillElementsInput("cardCvc", cardDetails.cardCvc);
    cy.fillElementsInput("postalCode", cardDetails.postalCode);
    return this;
  }

  checkTotal(expected) {
    cy.findByTestId("totalToPay").contains(expected);
    return this;
  }

  pay() {
    cy.contains("Pay with a card").click();
    cy.contains("Payment successfully completed", { timeout: 10000 });
    return new SuccessPage();
  }
}

export default PaymentPage;
