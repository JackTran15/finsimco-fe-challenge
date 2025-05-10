import { AlertCircle, Clock } from "lucide-react";

import { useTimer } from "./timer.hook";

export const Timer = () => {
  const { timeRemaining, formattedTime } = useTimer();
  const isLessThan30Minutes = timeRemaining > 30 * 60;

  return (
    <div
      className={`flex items-center gap-2 rounded-lg p-2 ${isLessThan30Minutes ? "animate-pulse bg-red-100 dark:bg-red-950" : ""}`}
    >
      {isLessThan30Minutes ? (
        <AlertCircle className="h-4 w-4 text-red-500" />
      ) : (
        <Clock className="h-4 w-4 text-slate-500" />
      )}
      <span
        className={`text-sm font-medium ${isLessThan30Minutes ? "text-red-600 dark:text-red-400" : "text-slate-700 dark:text-slate-300"}`}
      >
        {formattedTime}
      </span>
    </div>
  );
};
