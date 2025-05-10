import type { UseFormReturn } from "react-hook-form";
import type { NegotiationFormValues } from "@pages/negotiation-simulator/schema/negotiation-form-schema";

export type NegotiationFormProps = {
  formMethods: UseFormReturn<NegotiationFormValues>;
};

export type UseNegotiationFormProps = NegotiationFormProps;
