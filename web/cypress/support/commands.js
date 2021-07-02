const testAddress = {
  firstName: "John",
  lastName: "Snow",
  street: "Castle Black",
  postalCode: "00-000",
  city: "The North",
};

const testCard = {
  cardNumber: "4242424242424242",
  cardExpiry: "1025",
  cardCvc: "123",
  postalCode: "00000",
};

Cypress.Commands.add("fillInAddress", (address = testAddress) => {
  cy.findByPlaceholderText("First name").type(address.firstName);
  cy.findByPlaceholderText("Last name").type(address.lastName);
  cy.findByPlaceholderText("Street").type(address.street);
  cy.findByPlaceholderText("Postal code").type(address.postalCode);
  cy.findByPlaceholderText("City").type(address.city);
});

Cypress.Commands.add("fillInCardDetails", (card = testCard) => {
  cy.fillElementsInput("cardNumber", card.cardNumber);
  cy.fillElementsInput("cardExpiry", card.cardExpiry);
  cy.fillElementsInput("cardCvc", card.cardCvc);
  cy.fillElementsInput("postalCode", card.postalCode);
});
