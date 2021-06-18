// eslint-disable-next-line import/no-extraneous-dependencies
import "regenerator-runtime/runtime";
import React, { useReducer } from "react";
import { Provider } from "react-redux";
import { AppRoutes } from "./AppRoutes";
import { CurrencyProvider } from "./currencyContext/CurrencyContext";
import { CurrencyChanger } from "./molecules/CurrencyChanger";
import store from "./state/store";

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <CurrencyProvider>
        <CurrencyChanger />
        <AppRoutes />
      </CurrencyProvider>
    </Provider>
  );
}

export default App;
