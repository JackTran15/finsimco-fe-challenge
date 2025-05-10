import { HelpCircle, Info, X } from "lucide-react";

import { Button } from "@/components/core/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/core/collapsible/collapsible.view";

import { useNegotiationGuidance } from "./negotiation-guidance.hook";

export const NegotiationGuidance = () => {
  const { guidanceOpen, handleGuidanceClose } = useNegotiationGuidance();

  if (!guidanceOpen) return null;

  return (
    <div className="mb-6">
      <Collapsible open={guidanceOpen} onOpenChange={handleGuidanceClose}>
        <CollapsibleTrigger asChild>
          <div className="flex cursor-pointer items-center justify-between rounded-lg border border-blue-200 bg-blue-50 p-4 transition-colors hover:bg-blue-100 dark:border-blue-800 dark:bg-blue-950 dark:hover:bg-blue-900">
            <div className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-blue-600" />
              <h3 className="font-semibold text-blue-700 dark:text-blue-300">
                First Time Guidance
              </h3>
            </div>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
              {guidanceOpen ? (
                <X className="h-5 w-5 text-blue-600" />
              ) : (
                <Info className="h-5 w-5 text-blue-600" />
              )}
            </Button>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="bg-gray-surface rounded-b-lg border-x border-b border-blue-200 p-4 shadow-sm dark:border-blue-800 dark:bg-slate-800">
          <p className="text-gray-text leading-relaxed dark:text-slate-300">
            Welcome to the Negotiation Simulator! This tool allows two teams to
            negotiate on various terms. Team 1 is responsible for inputting
            values, while Team 2 can approve or mark them as TBD (To Be
            Determined).
            <br />
            <br />
            The valuation is calculated automatically based on EBITDA × Multiple
            × Factor Score. The pie chart visualizes how each component
            contributes to the final valuation. Use the sidebar buttons to
            access video instructions and detailed text guidance.
            <br />
            <br />
            Once all terms are agreed upon (marked as OK), you can submit the
            negotiation results using the Submit button.
          </p>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
