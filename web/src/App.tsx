// eslint-disable-next-line import/no-extraneous-dependencies
import "regenerator-runtime/runtime";
import React, { useReducer } from "react";
import { useMachine } from "@xstate/react";
import { MachineContext } from "./MachineContext";
import checkoutMachine from "./state";
import { AppRoutes } from "./AppRoutes";
import {CurrencyProvider} from "./currencyContext/CurrencyContext";
import { CurrencyChanger } from "./molecules/CurrencyChanger";


function App(): JSX.Element {
  const [, , service] = useMachine(checkoutMachine);
  return (
    <MachineContext.Provider value={service}>
      <CurrencyProvider>
        <CurrencyChanger />
        <AppRoutes />
      </CurrencyProvider>
    </MachineContext.Provider>
  );
}

export default App;
