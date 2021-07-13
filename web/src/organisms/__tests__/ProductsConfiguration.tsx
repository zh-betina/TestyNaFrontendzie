import * as React from "react";
import { getTestStore, render, screen } from "test-utils";
import user from "@testing-library/user-event";
import { Product } from "../../types/Product";
import { Currency } from "../../types/Currency";
import { ProductsConfiguration } from "../ProductsConfiguration";

describe("<ProductsConfiguration />", () => {
  it("allows for editing existing product", () => {
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
    const store = getTestStore({
      // @ts-ignore
      cart: {
        products: [product],
      },
    });
    const onEdit = jest.fn();
    render(<ProductsConfiguration onEdit={onEdit} />, { store });

    const productEditButton = screen.getByTestId(`edit-button-${product._id}`);

    user.click(productEditButton);

    expect(onEdit).toBeCalledTimes(1);
    expect(onEdit).toBeCalledWith(product._id);
  });
});
