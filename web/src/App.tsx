// eslint-disable-next-line import/no-extraneous-dependencies
import "regenerator-runtime/runtime";
import React, { useReducer } from "react";
import { Provider } from "react-redux";
import { useMachine } from "@xstate/react";
import { MachineContext } from "./MachineContext";
import checkoutMachine from "./state";
import { AppRoutes } from "./AppRoutes";
import { CurrencyProvider } from "./currencyContext/CurrencyContext";
import { CurrencyChanger } from "./molecules/CurrencyChanger";
import store from "./state/store";

function App(): JSX.Element {
  const [, , service] = useMachine(checkoutMachine);
  return (
    <Provider store={store}>
      <MachineContext.Provider value={service}>
        <CurrencyProvider>
          <CurrencyChanger />
          <AppRoutes />
        </CurrencyProvider>
      </MachineContext.Provider>
    </Provider>
  );
}

export default App;
