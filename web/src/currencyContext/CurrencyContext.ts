import React, { Dispatch } from "react";
import { Action, reducer, ReducerState, startingState } from "./reducers";

export interface CurrencyContextInterface extends ReducerState {
  dispatch?: Dispatch<Action>;
}

const CurrencyContext =
  React.createContext<CurrencyContextInterface>(startingState);

export default {
  Context: CurrencyContext,
  startingState,
  reducer,
};
