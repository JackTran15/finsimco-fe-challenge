import { z } from "zod";

export const negotiationFormSchema = z.object({
  ebitda: z.number().min(1, "EBITDA must be at least 1"),
  multiple: z.number().min(1, "Multiple must be at least 1"),
  factorScore: z
    .number()
    .min(1, "Factor Score must be at least 1")
    .max(5, "Factor Score must be at most 5"),
  companyName: z.string().min(1, "Company Name is required"),
  description: z.string().min(1, "Description is required"),
});

export type NegotiationFormValues = z.infer<typeof negotiationFormSchema>;

export const defaultValues: NegotiationFormValues = {
  ebitda: 10,
  multiple: 10,
  factorScore: 2,
  companyName: "ABC Corp.",
  description: "This is the company's description. This company is #1!",
};
