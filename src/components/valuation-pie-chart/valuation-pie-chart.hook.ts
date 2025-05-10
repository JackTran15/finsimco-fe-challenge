import { useMemo } from "react";

import type { ValuationPieChartProps } from "./valuation-pie-chart.props";

export const useValuationPieChart = (props: ValuationPieChartProps) => {
  const { ebitda, multiple, factorScore } = props;

  // 1) Total Valuation
  const totalValuation = useMemo(
    () => ebitda * multiple * factorScore,
    [ebitda, multiple, factorScore]
  );

  // 2) Component raw values
  const baseValue = useMemo(
    () => ebitda * 1 * 1, // Base contribution is just EBITDA
    [ebitda]
  );

  const multipleValue = useMemo(
    () => ebitda * (multiple - 1) * 1, // Multiple contribution is EBITDA × (Multiple - 1)
    [ebitda, multiple]
  );

  const factorValue = useMemo(
    () => ebitda * multiple * (factorScore - 1), // Factor contribution is EBITDA × Multiple × (Factor Score - 1)
    [ebitda, multiple, factorScore]
  );

  // 3) Contributions as percentages
  const ebitdaContribution = useMemo(
    () => (baseValue / totalValuation) * 100,
    [baseValue, totalValuation]
  );

  const multipleContribution = useMemo(
    () => (multipleValue / totalValuation) * 100,
    [multipleValue, totalValuation]
  );

  const factorContribution = useMemo(
    () => (factorValue / totalValuation) * 100,
    [factorValue, totalValuation]
  );

  // Format number to display with dots as thousands separator
  const formatNumber = (num: number): string => {
    return num.toLocaleString("de-DE"); // Using German locale for dot separator
  };

  // Prepare data for chart
  const chartData = useMemo(() => {
    return [
      {
        name: `EBITDA (${ebitdaContribution.toFixed(1)}%)`,
        value: ebitdaContribution,
        color: "#4f46e5", // Indigo color
        tooltip: `$${formatNumber(ebitda)}M`,
      },
      {
        name: `Multiple (${multipleContribution.toFixed(1)}%)`,
        value: multipleContribution,
        color: "#8b5cf6", // Violet color
        tooltip: `(x${formatNumber(multiple)}) - $${formatNumber(multipleValue)}M`,
      },
      {
        name: `Factor Score (${factorContribution.toFixed(1)}%)`,
        value: factorContribution,
        color: "#ec4899", // Pink color
        tooltip: `(x${formatNumber(factorScore)}) - $${formatNumber(factorValue)}M`,
      },
    ];
  }, [ebitdaContribution, multipleContribution, factorContribution, ebitda, multiple, factorScore, multipleValue, factorValue]);

  return {
    totalValuation,
    formatNumber,
    chartData,
  };
};
