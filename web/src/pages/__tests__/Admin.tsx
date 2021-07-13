import React from "react";
import { getTestStore, render, screen, waitFor } from "test-utils";
import user from "@testing-library/user-event";
import { Product } from "../../types/Product";
import { Currency } from "../../types/Currency";
import Admin from "../Admin";
import { updateProduct as updateProductMock } from "../../api/api";

jest.mock("../../api/api");

describe("<Admin />", () => {
  const product: Product = {
    _id: "1",
    name: {
      pl: "Produkt testowy",
      en: "Test product",
    },
    brand: "Test brand",
    price: [
      {
        currency: Currency.PLN,
        price: 25000,
      },
      {
        currency: Currency.USD,
        price: 6688,
      },
      {
        currency: Currency.EUR,
        price: 5517,
      },
    ],
  };

  beforeEach(() => {
    const store = getTestStore({
      // @ts-ignore
      cart: {
        products: [product],
      },
    });
    const userState = { state: { user: "token" } };
    render(<Admin />, { store, user: userState });

    const editButton = screen.getByTestId(`edit-button-${product._id}`);
    user.click(editButton);
  });

  it("allows for editing existing product", async () => {
    (updateProductMock as jest.Mock).mockResolvedValueOnce({});

    const productNameInPolishInput = screen.getByDisplayValue(product.name.pl);
    const newProductNameInPolish = "nowa nazwa produktu";
    user.clear(productNameInPolishInput);
    user.type(productNameInPolishInput, newProductNameInPolish);

    await waitFor(() => {
      const onSaveButton = screen.getByRole("button", { name: "Save" });
      user.click(onSaveButton);

      expect(updateProductMock).toBeCalledTimes(1);
      expect(updateProductMock).toBeCalledWith(product._id, {
        name: { ...product.name, pl: newProductNameInPolish },
        brand: product.brand,
        price: product.price,
      });
    });
  });

  it("renders existing product values in form", () => {
    expect(screen.getByDisplayValue(product.name.pl)).toBeDefined();
    expect(screen.getByDisplayValue(product.name.en)).toBeDefined();
    expect(screen.getByDisplayValue(product.brand)).toBeDefined();
    expect(screen.getByDisplayValue(25000)).toBeDefined();
    expect(screen.getByDisplayValue(6688)).toBeDefined();
    expect(screen.getByDisplayValue(5517)).toBeDefined();
  });
});
