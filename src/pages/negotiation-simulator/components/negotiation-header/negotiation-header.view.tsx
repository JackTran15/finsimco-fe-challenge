import { LogOut } from "lucide-react";

import { Button } from "@/components/core/button";
import { TeamSwitcher } from "@/components/team-switcher";
import { Timer } from "@/components/timer";

import { useNegotiationHeader } from "./negotiation-header.hook";

export const NegotiationHeaderView = () => {
  const { team, setTeam } = useNegotiationHeader();

  return (
    <div className="bg-gray-background border-gray-border grid items-center justify-between gap-3 border-b p-4 md:flex dark:bg-slate-800">
      <div className="flex items-center gap-4">
        <div className="bg-gray-surface border-gray-border flex items-center gap-2 rounded-md border p-2 shadow-sm dark:bg-slate-700">
          <Timer />
        </div>
        <div className="bg-gray-surface border-gray-border flex items-center gap-2 rounded-md border p-2 shadow-sm dark:bg-slate-700">
          <span className="text-gray-text font-medium dark:text-slate-300">
            Stage:
          </span>
          <span className="font-bold text-blue-600 dark:text-blue-400">
            ANALYSIS
          </span>
        </div>
      </div>
      <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
        <TeamSwitcher team={team} onChange={setTeam} />
        <div className="flex items-center gap-2">
          <span className="text-gray-text font-medium dark:text-slate-300">
            John Doe
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-text hover:text-red-600"
          >
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};