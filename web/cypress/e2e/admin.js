import AdminLoginPage from "../pages/AdminLoginPage";
import AdminProductsPage from "../pages/AdminProductsPage";

const adminLoginPageTest = () => {
  cy.visit("/admin");
  const adminLoginPage = new AdminLoginPage();
  return adminLoginPage
    .typeCredentials("admin@admin.com", "admin")
    .login()
    .checkIfRedirectedToAdminPanel();
};

describe("admin", () => {
  before(() => {
    cy.exec("cd .. && npm run resetDatabaseData");
  });

  beforeEach(() => {
    adminLoginPageTest();
  });

  it("logs in and logs out the admin", () => {
    const adminLoginPage = new AdminLoginPage();
    adminLoginPage.logout().checkIfLoggedOut();
  });

  it("allows admin to add and remove products", () => {
    const newProduct = {
      namePL: "Długa sukienka",
      nameENG: "Maxi dress",
      brand: "Sezane",
      priceUSD: "15000",
      priceEUR: "20000",
      pricePLN: "80000",
    };

    const productNameToRemove = "Sweatpants - Nike";

    const adminProductsPage = new AdminProductsPage();
    adminProductsPage
      .removeProduct(productNameToRemove)
      .verifyExistence(productNameToRemove, false);

    const productsPage = adminProductsPage
      .addNew(newProduct)
      .verifyExistence(`${newProduct.nameENG} - ${newProduct.brand}`, true)
      .verifyExistence("Products", true)
      .logout();

    productsPage
      .navigateToProductsPage()
      .verifyProductExistence(`${newProduct.nameENG} - ${newProduct.brand}`);
  });
});
