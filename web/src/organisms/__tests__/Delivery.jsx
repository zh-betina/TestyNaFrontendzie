import React from "react";
import Delivery from "../Delivery";
import { render, screen, getTestStore } from "test-utils";
import { shipmentMethods } from "../../types/ShipmentMethod";
import userEvent from "@testing-library/user-event";

const cartMock = {
    items: [
        {
            id: "1",
            brand: "Szkoła testów",
            name: {
                pl: "Kurs Testy na Frontendzie",
                en: "Frontend tests",
            },
            price: [{ currency: "USD", price: 220 }],
            quantity: 1,
        },
    ],
    appliedDiscount: null,
}

describe("<Delivery />", () => {
    it.each`
        shipmentMethod | expectedTestId
        ${shipmentMethods[0]} | ${"expressDelivery"}
        ${shipmentMethods[1]} | ${"standardDelivery"}
    `("changes checked state of input with test id $expectedDelivery in according to the redux store state",
    ({ shipmentMethod, expectedTestId })=> {
        const store = getTestStore({
            cart: cartMock,
            delivery: {
                address: null,
                shipmentMethod: shipmentMethod
            }
        });

        render(<Delivery />, { store });
        const expectedChosenDelivery = screen.getByTestId(expectedTestId);
        expect(expectedChosenDelivery).toBeChecked();
    });

    it.each`
        itemPrice | isDeliveryFree
        ${200} | ${false}
        ${5500} | ${true}
    `("makes standard delivery fee free if item price >= 5500",
    ({ itemPrice, isDeliveryFree })=> {
        const customizedCart = {
            ...cartMock,
            items: [
                {
                    ...cartMock.items[0],
                    price: [{ currency: "USD", price: itemPrice }]
                }
            ]
        };

        const store = getTestStore({ cart: customizedCart });

        render(<Delivery />, { store });
        const freeInfoText = screen.queryByText(/free/i);

        isDeliveryFree ? expect(freeInfoText).toBeInTheDocument() : expect(freeInfoText).not.toBeInTheDocument();
    });

    it("changes state value of Redux for delivery type when input is clicked", ()=> {
        const store = getTestStore({
            delivery: {
                address: null,
                shipmentMethod: shipmentMethods[1]
            }
        });

        render(<Delivery />, { store });
        const initiallyChosenDelivery = screen.getByTestId("standardDelivery");
        expect(initiallyChosenDelivery).toBeChecked();

        const newChosenDelivery = screen.getByTestId("expressDelivery");

        userEvent.click(newChosenDelivery);

        expect(newChosenDelivery).toBeChecked();
        expect(store.getState().delivery.shipmentMethod.type).toBe("expressDelivery");
    });
});