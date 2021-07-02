describe("Payment flow", () => {
  it("successfully completes payment with USD", () => {
    cy.visit("/");

    cy.contains("Sports shoes - Adidas").parent().find("img").click();
    cy.findByTestId("cartSize").should("have.text", 1);
    cy.findByTestId("cartSize").click();

    cy.contains("Address").click();

    cy.fillInAddress();

    cy.contains("Payment").click();

    cy.fillInCardDetails();

    cy.findByTestId("totalToPay").contains("73.57 $");
    cy.contains("Pay with a card").click();
    cy.contains("Payment successfully completed", { timeout: 10000 });
  });
});
