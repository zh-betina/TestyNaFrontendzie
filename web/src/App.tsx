// eslint-disable-next-line import/no-extraneous-dependencies
import "regenerator-runtime/runtime";
import React, { useReducer } from "react";
import { Provider } from "react-redux";
import { AppRoutes } from "./AppRoutes";
import CurrencyContext from "./currencyContext/CurrencyContext";
import { CurrencyChanger } from "./molecules/CurrencyChanger";
import store from "./state/store";

function App(): JSX.Element {
  const [currencyState, currencyDispatch] = useReducer(
    CurrencyContext.reducer,
    CurrencyContext.startingState
  );

  const currencyContext = { ...currencyState, dispatch: currencyDispatch };
  return (
    <Provider store={store}>
      <CurrencyContext.Context.Provider value={currencyContext}>
        <CurrencyChanger />
        <AppRoutes />
      </CurrencyContext.Context.Provider>
    </Provider>
  );
}

export default App;
