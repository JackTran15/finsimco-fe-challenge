import { useWatch } from "react-hook-form";
import { APP_ENV } from "@/app/app.env";
import { useNegotiation } from "@/pages/negotiation-simulator/providers/negotiation";

import type { UseValuationDisplayProps } from "./valuation-display.props";

export const useValuationDisplay = ({ control }: UseValuationDisplayProps) => {
  const { calculateValuation } = useNegotiation();

  const ebitda = useWatch({
    control,
    name: "ebitda",
    defaultValue: 10,
  });

  const multiple = useWatch({
    control,
    name: "multiple",
    defaultValue: 10,
  });

  const factorScore = useWatch({
    control,
    name: "factorScore",
    defaultValue: 2,
  });

  const clampedEbitda = Math.min(
    Math.max(ebitda, APP_ENV.MIN_EBITDA),
    APP_ENV.MAX_EBITDA
  );
  const clampedMultiple = Math.min(
    Math.max(multiple, APP_ENV.MIN_MULTIPLE),
    APP_ENV.MAX_MULTIPLE
  );
  const clampedFactorScore = Math.min(
    Math.max(factorScore, APP_ENV.MIN_FACTOR_SCORE),
    APP_ENV.MAX_FACTOR_SCORE
  );

  // Calculate valuation
  const valuation = calculateValuation(ebitda, multiple, factorScore);

  // Check if any input is outside valid range
  const hasInputWarnings =
    ebitda > APP_ENV.MAX_EBITDA ||
    ebitda < APP_ENV.MIN_EBITDA ||
    multiple > APP_ENV.MAX_MULTIPLE ||
    multiple < APP_ENV.MIN_MULTIPLE ||
    factorScore > APP_ENV.MAX_FACTOR_SCORE ||
    factorScore < APP_ENV.MIN_FACTOR_SCORE;

  return {
    ebitda: clampedEbitda,
    multiple: clampedMultiple,
    factorScore: clampedFactorScore,
    actualEbitda: ebitda,
    actualMultiple: multiple,
    actualFactorScore: factorScore,
    valuation,
    hasInputWarnings,
  };
};
