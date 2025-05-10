import type { Control } from "react-hook-form";
import type { NegotiationFormValues } from "@pages/negotiation-simulator/schema/negotiation-form-schema";

export interface ValuationDisplayProps {
  control: Control<NegotiationFormValues>;
}

export type UseValuationDisplayProps = ValuationDisplayProps;
