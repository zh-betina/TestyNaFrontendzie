import React, { Dispatch, useReducer } from "react";
import { Action, reducer, ReducerState, startingState } from "./reducers";

type CurrencyProviderProps = {
  children: React.ReactNode;
  value?: CurrencyContextInterface;
};

interface CurrencyContextInterface {
  dispatch?: Dispatch<Action>;
  state: ReducerState;
}

const CurrencyContext =
  React.createContext<CurrencyContextInterface | undefined>(undefined);

const CurrencyProvider = ({ children, ...props }: CurrencyProviderProps) => {
  const [state, dispatch] = useReducer(reducer, startingState);
  const value = { state, dispatch };
  return (
    <CurrencyContext.Provider value={value} {...props}>
      {children}
    </CurrencyContext.Provider>
  );
};

const useCurrency = () => {
  const context = React.useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
};

export { CurrencyProvider, useCurrency };
