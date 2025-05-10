import {
  EFieldStatus,
  ETeam,
  useNegotiation,
} from "@/pages/negotiation-simulator/providers/negotiation";
import type { NegotiationFormValues } from "@/pages/negotiation-simulator/schema/negotiation-form-schema";

import type { UseNegotiationFormProps } from "./negotiation-form.props";

export const useNegotiationForm = ({
  formMethods,
}: UseNegotiationFormProps) => {
  const {
    team,
    fieldStatuses,
    setFieldStatus,
    setEditingField,
    setShowFactorScoreModal,
    openWarningModal,
  } = useNegotiation();

  const { watch, setValue } = formMethods;

  // Watch for changes to calculate valuation
  const ebitda = watch("ebitda");
  const multiple = watch("multiple");
  const factorScore = watch("factorScore");

  const handleInputChange = (
    field: keyof NegotiationFormValues,
    value: number | string
  ) => {
    // Check if field is already OK and team is 1
    if (team === ETeam.TEAM_1 && fieldStatuses[field] === EFieldStatus.OK) {
      openWarningModal(field, value as number);
      return;
    }

    setValue(field, value, { shouldValidate: true });
  };

  return {
    form: formMethods,
    ebitda,
    multiple,
    factorScore,
    team,
    fieldStatuses,
    setFieldStatus,
    handleInputChange,
    watch,
    setEditingField,
    setShowFactorScoreModal,
  };
};
