// eslint-disable-next-line import/no-extraneous-dependencies
import "regenerator-runtime/runtime";
import React from "react";
import { Provider } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { AppRoutes } from "./AppRoutes";
import { CurrencyProvider } from "./currencyContext/CurrencyContext";
import { CurrencyChanger } from "./molecules/CurrencyChanger";
import store from "./state/store";

const stripePromise = loadStripe(
  "pk_test_51HXAhqFNsYuREmdu37vlbCAbIQKLjh4PZKbvsiyVlxRf8NUPwvwJLFj8Jw8POX4mx3g7muxKA5ssyBNcLaFvml6B00MH1eNLXl",
);

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <CurrencyProvider>
        <Elements stripe={stripePromise}>
          <CurrencyChanger />
          <AppRoutes />
        </Elements>
      </CurrencyProvider>
    </Provider>
  );
}

export default App;
