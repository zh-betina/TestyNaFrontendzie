describe('comments', () => {
  it('user should has ability to add new comment under the product', () => {
    cy.visit('/');
    cy.findByText('Sweatpants - Adidas').click();
    cy.findByRole('button', { name: 'Add a new comment' }).click();
    cy.findByLabelText('Your name:').type('Piotr');
    cy.findByLabelText('Comment:').type('Buty są super!');
    cy.findByRole('button', { name: 'Add a new one' }).click();

    cy.findByTestId('comment-owner-name').should('have.text', 'Piotr');
    cy.findByTestId('comment-content').should('have.text', 'Buty są super!');
  });
});
