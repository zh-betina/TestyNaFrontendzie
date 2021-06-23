import React, { FC, ReactElement } from "react";
import { omit } from "lodash";
import { render, RenderOptions } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import {
  CurrencyContextInterface,
  CurrencyProvider,
} from "../currencyContext/CurrencyContext";
import i18n from "../i18nForTests";
import { startingState } from "../currencyContext/reducers";

type AllTheProvidersProps = {
  value?: CurrencyContextInterface;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries"> & AllTheProvidersProps
) => {
  let value = { state: startingState };
  if (options && options.value) {
    value = options.value;
  }

  const AllTheProviders: FC = ({ children }) => {
    return (
      <CurrencyProvider value={value}>
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
      </CurrencyProvider>
    );
  };

  const renderOptions = omit(options, "value");
  return render(ui, { wrapper: AllTheProviders, ...renderOptions });
};

export * from "@testing-library/react";

export { customRender as render };
