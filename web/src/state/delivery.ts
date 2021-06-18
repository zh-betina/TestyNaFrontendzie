import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Address } from "../types/Address";
import { ShipmentMethod, shipmentMethods } from "../types/ShipmentMethod";

interface DeliveryState {
  address: Address | null;
  shipmentMethod: ShipmentMethod | null;
}

const initialState: DeliveryState = {
  address: null,
  shipmentMethod: shipmentMethods[0],
};

const deliverySlice = createSlice({
  name: "delivery",
  initialState,
  reducers: {
    chooseShipment: (
      state,
      action: PayloadAction<{ methodType: ShipmentMethod["type"] }>
    ) => {
      const shipmentMethod =
        shipmentMethods.find(
          (method) => method.type === action.payload.methodType
        ) ?? null;
      return { ...state, shipmentMethod };
    },
    setAddress: (state, action: PayloadAction<{ address: Address }>) => {
      return { ...state, address: action.payload.address };
    },
  },
});

// Action creators are generated for each case reducer function
export const { chooseShipment, setAddress } = deliverySlice.actions;

export default deliverySlice.reducer;
