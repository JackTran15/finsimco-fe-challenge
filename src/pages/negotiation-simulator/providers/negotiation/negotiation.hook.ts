import { useContext } from "react";

import { NegotiationContext } from "./negotiation.ctx";

export const useNegotiation = () => {
  const context = useContext(NegotiationContext);
  if (context === undefined) {
    throw new Error("useNegotiation must be used within a NegotiationProvider");
  }
  return context;
};
