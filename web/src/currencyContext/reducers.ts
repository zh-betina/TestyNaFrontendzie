import { Currency } from "../types/Currency";
import { CurrencyContextAction } from "./actions";

export interface ReducerState {
  selectedCurrency: Currency;
}

export const startingState: ReducerState = {
  selectedCurrency: Currency.PLN,
};

export type Action = {
  type: CurrencyContextAction;
  currentCurrency: Currency;
};

function resetContext(): ReducerState {
  return startingState;
}

function setCurrentCurrency(currency: Currency, state: ReducerState) {
  return { ...state, selectedCurrency: currency };
}

export const reducer = (state: ReducerState, action: Action): ReducerState => {
  switch (action.type) {
    case CurrencyContextAction.SET_CURRENT_CURRENCY:
      return setCurrentCurrency(action.currentCurrency, state);
    case CurrencyContextAction.RESET_CONTEXT:
      return resetContext();
    default:
      return state;
  }
};
