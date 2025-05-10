import { CheckCircle, Pencil } from "lucide-react";

import type { TeamSwitcherProps } from "./team-switcher.props";

export const TeamSwitcher = (props: TeamSwitcherProps) => {
  const { team, onChange } = props;

  return (
    <div className="rounded-lg bg-gray-100 p-1 shadow-inner dark:bg-slate-700">
      <div
        className={`flex rounded-md ${team === 1 ? "team-1-active" : "team-2-active"}`}
      >
        <div
          className="team-switch-option team-1-option rounded-l-md"
          onClick={() => onChange(1)}
        >
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-2">
              <Pencil
                className={`h-4 w-4 ${team === 1 ? "text-blue-600" : "text-gray-500"}`}
              />
              <span
                className={`font-medium ${team === 1 ? "text-blue-600" : "text-gray-500"}`}
              >
                Team 1
              </span>
            </div>
            <span className="text-xs text-gray-500">Input Values</span>
          </div>
        </div>

        <div
          className="team-switch-option team-2-option rounded-r-md"
          onClick={() => onChange(2)}
        >
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-2">
              <CheckCircle
                className={`h-4 w-4 ${team === 2 ? "text-green-500" : "text-gray-500"}`}
              />
              <span
                className={`font-medium ${team === 2 ? "text-green-500" : "text-gray-500"}`}
              >
                Team 2
              </span>
            </div>
            <span className="text-xs text-gray-500">Approve Values</span>
          </div>
        </div>
      </div>
    </div>
  );
};
