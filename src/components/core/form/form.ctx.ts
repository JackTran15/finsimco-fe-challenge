import { createContext } from "react";

import type { FormFieldContextValue, FormItemContextValue } from "./form.props";

export const FormFieldContext = createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);

export const FormItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue
);
