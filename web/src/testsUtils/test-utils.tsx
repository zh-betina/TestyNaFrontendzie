import React, { FC, ReactElement } from "react";
import { omit } from "lodash";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { render, RenderOptions, RenderResult } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { RootState, reducer } from "../state/store";
import {
  CurrencyContextInterface,
  CurrencyProvider,
} from "../currencyContext/CurrencyContext";
import i18n from "../i18nForTests";
import { startingState } from "../currencyContext/reducers";

type AllTheProvidersProps = {
  value?: CurrencyContextInterface;
  store?: ReturnType<typeof getTestStore>;
};

export const getTestStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer,
    preloadedState,
  });
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries"> & AllTheProvidersProps
): RenderResult => {
  let value = { state: startingState };
  if (options && options.value) {
    value = options.value;
  }

  const testStore = options?.store ?? getTestStore();

  const AllTheProviders: FC = ({ children }) => {
    return (
      <Provider store={testStore}>
        <CurrencyProvider value={value}>
          <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
        </CurrencyProvider>
      </Provider>
    );
  };

  const renderOptions = omit(options, "value");
  return render(ui, { wrapper: AllTheProviders, ...renderOptions });
};

export * from "@testing-library/react";

export { customRender as render };
