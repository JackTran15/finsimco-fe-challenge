import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

import { useValuationPieChart } from "./valuation-pie-chart.hook";
import type { ValuationPieChartProps } from "./valuation-pie-chart.props";

export const ValuationPieChart = (props: ValuationPieChartProps) => {
  const { totalValuation, formatNumber, chartData } =
    useValuationPieChart(props);

  return (
    <div className="rounded-xl bg-yellow-50 p-4">
      <h3 className="mb-2 text-center text-lg font-semibold text-slate-900 dark:text-white">
        Valuation Breakdown
      </h3>
      <p className="mb-4 text-center text-2xl font-bold text-slate-900 dark:text-white">
        ${formatNumber(totalValuation)}M
      </p>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              innerRadius={40}
              fill="#8884d8"
              dataKey="value"
              paddingAngle={2}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number) => [
                `$ ${formatNumber(value)}M`,
                "Value",
              ]}
              contentStyle={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderRadius: "8px",
                border: "1px solid #ddd",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-col gap-2">
        {chartData.map((entry, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="h-4 w-4 rounded"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-sm text-slate-700 dark:text-slate-300">
              {entry.name}: {entry.tooltip}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
