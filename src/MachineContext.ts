import { createContext } from "react";
import { Interpreter } from "xstate";
import { CheckoutEvents, CheckoutState } from "./state";

export const MachineContext = createContext<
  Interpreter<
    CheckoutState,
    any,
    CheckoutEvents,
    {
      value: any;
      context: CheckoutState;
    }
  >
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
>(null!);
