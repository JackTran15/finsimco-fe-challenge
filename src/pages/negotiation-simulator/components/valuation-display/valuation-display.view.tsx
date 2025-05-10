import { formatMoney } from "@/lib/utils";
import { AlertTriangle } from "lucide-react";

import { InfoTooltip } from "@/components/info-tooltip";
import { ValuationPieChart } from "@/components/valuation-pie-chart";

import { useValuationDisplay } from "./valuation-display.hook";
import type { ValuationDisplayProps } from "./valuation-display.props";

export const ValuationDisplayView = (props: ValuationDisplayProps) => {
  const { ebitda, multiple, factorScore, valuation, hasInputWarnings } =
    useValuationDisplay(props);

  return (
    <div className="col-span-12 md:col-span-6">
      <div className="space-y-6">
        <div className="bg-gray-surface border-gray-border rounded-lg border p-4 shadow-sm dark:bg-slate-800">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-gray-text text-lg font-semibold dark:text-slate-300">
              Valuation
            </h3>
            <InfoTooltip
              title="Valuation Formula"
              content={
                <div>
                  <p>The company valuation is calculated using the formula:</p>
                  <div className="bg-gray-background my-3 rounded p-2 text-center dark:bg-slate-700">
                    <strong>
                      Valuation = EBITDA × Multiple × Factor Score
                    </strong>
                  </div>
                  <p>Current calculation:</p>
                  <p className="mt-1 font-mono text-sm">
                    ${ebitda} million × {multiple}x × {factorScore} = $
                    {valuation} million
                  </p>
                </div>
              }
            />
          </div>

          {hasInputWarnings && (
            <div className="mb-3 rounded-md border border-yellow-200 bg-yellow-50 p-3 dark:border-yellow-800 dark:bg-yellow-900/30">
              <div className="flex items-center">
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
                <span className="ml-2 text-yellow-700 dark:text-yellow-500">
                  Some input values exceed their limits. Calculation is using
                  the maximum allowed values.
                </span>
              </div>
            </div>
          )}

          <div className="text-3xl font-bold text-green-500 dark:text-green-400">
            ${formatMoney(valuation)}M
          </div>
          <div className="text-muted-text mt-1 text-sm dark:text-slate-400">
            Based on EBITDA × Multiple × Factor Score
          </div>
        </div>

        <div className="bg-gray-surface rounded-lg border p-4 shadow-sm dark:bg-slate-800">
          <ValuationPieChart
            ebitda={ebitda}
            multiple={multiple}
            factorScore={factorScore}
          />
          <div className="mt-4 text-center">
            <div className="inline-flex items-center justify-center rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium dark:bg-slate-800">
              <span className="text-[#4f46e5]">EBITDA</span>
              <span className="mx-2">×</span>
              <span className="text-[#8b5cf6]">Multiple</span>
              <span className="mx-2">×</span>
              <span className="text-[#ec4899]">Factor Score</span>
              <span className="mx-2">=</span>
              <span className="font-bold">${valuation.toLocaleString()}M</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
