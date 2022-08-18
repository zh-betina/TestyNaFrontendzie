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

const checkCalculation = (initialVal, buttonType) => {
    let result;
    switch (buttonType) {
        case "+1":
            result = initialVal + 1;
            break;
        case "-1":
            result = initialVal - 1;
            break;
        default:
            break;
    }
    return result;
}

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

    /**
     * Struggled to check if the quantity value did change indeed.
     * Probably lacking some knowledge, but the component didn't rerender
     * on the click event here and the quantity value stayed the same...
     */
    it.each`
        buttonText | onEventFunction
        ${"+1"} | ${onAddMock}
        ${"-1"} | ${onRemoveMock}
    `("checks if the functions for adding and removing quantity are called correctly",
        ({ buttonText, onEventFunction }) => {
            render(<ListElement product={mockProduct} onAdd={onAddMock} onRemove={onRemoveMock} />)
            const modifyQuantityButton = screen.getByRole("button", {
                name: `${buttonText}`
            });
            user.click(modifyQuantityButton);

            expect(onEventFunction).toBeCalled();
            expect(onEventFunction).toBeCalledTimes(1);
        }
    );

    it("should check if the button for removing is disabled when product.quantity < 1", () => {
        const zeroQuantityProductMock = { name: "Shoes", price: 25000, quantity: 0 };
        render(<ListElement product={zeroQuantityProductMock} onAdd={onAddMock} onRemove={onRemoveMock} />);

        const removeQuantityButton = screen.getByText("-1");
        expect(removeQuantityButton).toBeDisabled();
    });
});