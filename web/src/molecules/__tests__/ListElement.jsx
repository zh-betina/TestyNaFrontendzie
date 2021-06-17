import React from "react";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Currency } from "../../types/Currency";
import ListElement from "../ListElement";

describe("<ListElement/>", () => {
  const getProduct = (price, quantity = 1) => ({
    id: "1",
    name: "Super produkt",
    price,
    quantity,
  });

  const getPriceObject = (plnPrice, usdPrice, euroPrice) => {
    return [
      { currency: Currency.PLN, price: plnPrice },
      { currency: Currency.USD, price: usdPrice },
      { currency: Currency.EUR, price: euroPrice },
    ];
  };

  it("displays price of element", () => {
    const product = getProduct(getPriceObject(2000, 400, 500));
    render(
      <ListElement product={product} onRemove={jest.fn()} onAdd={jest.fn()} />
    );

    const priceDiv = screen.getByTestId("product-price");
    expect(priceDiv).toContainHTML(`20 zł`);
  });

  it("displays summary price for more than one element", () => {
    const product = getProduct(getPriceObject(5050, 1200, 1500), 3);
    render(
      <ListElement product={product} onRemove={jest.fn()} onAdd={jest.fn()} />
    );

    const summaryPriceDiv = screen.getbyTestId("summary-price");
    expect(summaryPriceDiv).toContainHTML("151.5 zł");
  });

  it("displays quantity of the product", () => {
    const product = getProduct(getPriceObject(5050, 1200, 1500), 3);
    render(
      <ListElement product={product} onRemove={jest.fn()} onAdd={jest.fn()} />
    );

    const summaryPriceDiv = screen.getbyTestId("product-quantity");
    expect(summaryPriceDiv).toContainHTML("3");
  });

  it("runs provided functions for add and remove quantity", () => {
    const product = getProduct(getPriceObject(5050, 1200, 1500), 3);
    const onAddMock = jest.fn();
    const onRemoveMock = jest.fn();

    render(
      <ListElement
        product={product}
        onRemove={onRemoveMock}
        onAdd={onAddMock}
      />
    );

    const addOneMoreButton = screen.getByText("+1");
    user.click(addOneMoreButton);

    expect(onAddMock).toBeCalled();
    expect(onAddMock).toBeCalledTimes(1);

    const removeOneButton = screen.getByText("-1");
    user.click(removeOneButton);

    expect(onRemoveMock).toBeCalled();
    expect(onRemoveMock).toBeCalledTimes(1);
  });
});
