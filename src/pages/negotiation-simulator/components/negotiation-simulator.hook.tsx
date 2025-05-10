import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  defaultValues,
  negotiationFormSchema,
  type NegotiationFormValues,
} from "@pages/negotiation-simulator/schema/negotiation-form-schema";

export const useNegotiationSimulator = () => {
  const methods = useForm<NegotiationFormValues>({
    resolver: zodResolver(negotiationFormSchema),
    defaultValues,
    mode: "onChange",
  });

  const handleSubmit = useCallback((data: NegotiationFormValues) => {
    alert("Negotiation data submitted successfully!");
    console.log(data);
  }, []);

  return {
    methods,
    handleSubmit,
  };
};
