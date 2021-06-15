// eslint-disable-next-line import/no-extraneous-dependencies
import "regenerator-runtime/runtime";
import React, { useReducer } from "react";
import { useMachine } from "@xstate/react";
import { MachineContext } from "./MachineContext";
import checkoutMachine from "./state";
import { AppRoutes } from "./AppRoutes";
import CurrencyContext from "./currencyContext/CurrencyContext";
import { CurrencyChanger } from "./molecules/CurrencyChanger";

function App(): JSX.Element {
  const [, , service] = useMachine(checkoutMachine);
  const [currencyState, currencyDispatch] = useReducer(
    CurrencyContext.reducer,
    CurrencyContext.startingState
  );

  const currencyContext = { ...currencyState, dispatch: currencyDispatch };
  return (
    <MachineContext.Provider value={service}>
      <CurrencyContext.Context.Provider value={currencyContext}>
        <CurrencyChanger />
        <AppRoutes />
      </CurrencyContext.Context.Provider>
    </MachineContext.Provider>
  );
}

export default App;
