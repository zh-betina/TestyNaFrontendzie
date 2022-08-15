import React from "react";
import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import ListElement from "../ListElement";

const mockProduct = {
    id: "1",
    name: "Shoes",
    price: 25000,
    quantity: 3
};

const onRemoveMock = jest.fn();
const onAddMock = jest.fn();

describe("<ListElement />", () => {
    it("should display correctly product information", () => {
        render(<ListElement product={mockProduct} onAdd={onAddMock} onRemove={onRemoveMock} />)

        const calculatedPrice = mockProduct.price / 100;
        const productName = screen.getByText(`${mockProduct.name}`);
        const productPrice = screen.getByText(`${calculatedPrice}zł`);
        const productPriceWithQuantity = screen.getByText(`${(calculatedPrice * mockProduct.quantity)}zł`);

        expect(productName).toBeDefined();
        expect(productPrice).toBeDefined();
        expect(productPriceWithQuantity).toBeDefined();
    });

    it.each`
        buttonText | onEventFunction
        ${"+1"} | ${onAddMock}
        ${"-1"} | ${onRemoveMock}
    `("checks if the product quantity changes correctly when a button with text '$buttonText' is clicked",
        ({ buttonText, onEventFunction }) => {
            render(<ListElement product={mockProduct} onAdd={onAddMock} onRemove={onRemoveMock} />)
            const productQuantity = screen.getByTestId("productQuantity").TEXT_NODE;

            const modifyQuantityButton = screen.getByText(buttonText);
            user.click(modifyQuantityButton);

            const isProductQuantityDisplayOk = screen.getByTestId("productQuantity").TEXT_NODE == productQuantity;

            expect(onEventFunction).toBeCalled();
            expect(onEventFunction).toBeCalledTimes(1);
            expect(isProductQuantityDisplayOk).toBeTruthy();
        }
    );

    it("should check if the button for removing is disabled when product.quantity < 1", () => {
        const zeroQuantityProductMock = {name: "Shoes", price: 25000, quantity: 0 };
        render(<ListElement product={zeroQuantityProductMock} onAdd={onAddMock} onRemove={onRemoveMock} />);

        const removeQuantityButton = screen.getByText("-1");
        expect(removeQuantityButton).toBeDisabled();
    });
});