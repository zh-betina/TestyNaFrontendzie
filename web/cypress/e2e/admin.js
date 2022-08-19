import AdminLoginPage from "../pages/AdminLoginPage";
import AdminProductsPage from "../pages/AdminProductsPage";

describe("admin", () => {
  it("checks admin adding and removing products", () => {
    const newProduct = {
      namePL: "Długa sukienka",
      nameENG: "Maxi dress",
      brand: "Sezane",
      priceUSD: "15000",
      priceEUR: "20000",
      pricePLN: "80000",
    };

    const productNameToRemove = "Sweatpants - Nike";

    cy.visit("/admin");

    const adminLoginPage = new AdminLoginPage();
    adminLoginPage.typeCredentials("admin@admin.com", "admin").login();

    const adminProductsPage = new AdminProductsPage();
    adminProductsPage
      .removeProduct(productNameToRemove)
      .verifyExistence(productNameToRemove, false);

    const productsPage = adminProductsPage
      .addNew(newProduct)
      .verifyIfAdded(`${newProduct.nameENG} - ${newProduct.brand}`)
      .logout();

    productsPage
      .navigateToProductsPage()
      .verifyProductExistence(`${newProduct.nameENG} - ${newProduct.brand}`);
  });
});
