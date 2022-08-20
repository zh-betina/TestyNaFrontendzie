class AdminLoginPage {
  typeCredentials(email, password) {
    cy.findByPlaceholderText("Email").type(email);
    cy.findByPlaceholderText("Password").type(password);
    return this;
  }

  login() {
    cy.findByRole("button", { name: /sign in/i }).click();
    return this;
  }

  checkIfRedirectedToAdminPanel() {
    cy.contains("Email").should("not.exist");
    cy.findByRole("button", { name: "Logout" }).should("exist");
    cy.url().should("include", "/admin");
    return this;
  }

  logout() {
    cy.findByRole("button", { name: "Logout" }).click();
    return this;
  }

  checkIfLoggedOut() {
    cy.findByPlaceholderText("Email").should("exist");
    cy.findByPlaceholderText("Password").should("exist");
  }
}

export default AdminLoginPage;
