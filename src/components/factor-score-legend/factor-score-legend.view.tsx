const FactorScoreLegend = () => {
  return (
    <div className="mx-auto max-w-2xl space-y-6 rounded-xl border bg-white p-6 shadow-md dark:bg-slate-800">
      <h2 className="text-xl font-bold dark:text-white">Factor Score Guide</h2>

      {/* Gradient Bar with Markers */}
      <div className="relative">
        <div className="h-5 rounded-full bg-gradient-to-r from-red-500 via-green-500 via-yellow-400 to-blue-500" />

        {/* Score markers */}
        {[0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 4.0, 5.0].map((value) => (
          <div
            key={value}
            className="absolute top-5 -translate-x-1/2 transform text-xs text-gray-700 dark:text-gray-300"
            style={{ left: `${((value - 0.5) / 4.5) * 100}%` }}
          >
            {value}
          </div>
        ))}
      </div>

      {/* Descriptions */}
      <div className="space-y-4 text-sm">
        <div>
          <div className="font-semibold text-red-600 dark:text-red-400">
            🔴 Poor (0.5 – 0.8)
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            Indicates high risk or low strategic value. Typically used when the
            company has weak financials, uncertain market positioning, or
            operational instability.
          </p>
        </div>

        <div>
          <div className="font-semibold text-yellow-500">🟡 Average (1.0)</div>
          <p className="text-gray-700 dark:text-gray-300">
            Represents a neutral baseline. Used when the company is stable, but
            lacks strong differentiators or momentum for growth.
          </p>
        </div>

        <div>
          <div className="font-semibold text-green-600 dark:text-green-400">
            🟢 Good (1.2 – 2.0)
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            Reflects positive potential with manageable risk. Assigned when the
            company shows healthy growth indicators, solid product-market fit,
            or promising leadership.
          </p>
        </div>

        <div>
          <div className="font-semibold text-blue-600 dark:text-blue-400">
            🔵 Exceptional (2.5 – 5.0)
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            Reserved for rare high-performing companies. Typically backed by
            strong brand value, rapid growth, industry disruption, or a unique
            competitive advantage.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4 text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">
        <p>
          <strong>Note:</strong> The Factor Score is a multiplier in the
          valuation formula:
          <code className="ml-1 rounded bg-gray-100 px-1 py-0.5 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
            Valuation = EBITDA × Multiple × Factor Score
          </code>
          .
        </p>
        <p>
          Scores above 2.0 should be used sparingly and backed by strong
          justification.
        </p>
      </div>
    </div>
  );
};

export default FactorScoreLegend;
