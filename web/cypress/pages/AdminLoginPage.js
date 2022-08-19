class AdminLoginPage {
  typeCredentials(email, password) {
    cy.findByPlaceholderText("Email").type(email);
    cy.findByPlaceholderText("Password").type(password);
    return this;
  }

  login() {
    cy.findByRole("button", { name: /sign in/i }).click();
  }
}

export default AdminLoginPage;
