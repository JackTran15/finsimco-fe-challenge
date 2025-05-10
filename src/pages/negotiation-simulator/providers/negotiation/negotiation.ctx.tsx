import { createContext } from "react";

import type { NegotiationContextProps } from "./negotiation.props";

export const NegotiationContext = createContext<
  NegotiationContextProps | undefined
>(undefined);
