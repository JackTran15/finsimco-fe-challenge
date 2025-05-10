import { FormProvider } from "react-hook-form";
import { NegotiationProvider } from "@/pages/negotiation-simulator/providers/negotiation";
import { Info } from "lucide-react";

import { Button } from "@/components/core/button";
import { Card, CardContent } from "@/components/core/card/card.view";
import { TooltipProvider } from "@/components/core/tooltip/tooltip.view";

import {
  FactorScoreModal,
  TextModal,
  VideoModal,
  WarningModal,
} from "../modals";
import { NegotiationForm } from "../negotiation-form";
import { NegotiationGuidance } from "../negotiation-guidance";
import { NegotiationHeader } from "../negotiation-header";
import { NegotiationSidebar } from "../negotiation-sidebar";
import ValuationDisplay from "../valuation-display";
import { useNegotiationSimulator } from "./negotiation-simulator.hook";

const NegotiationSimulatorView = () => {
  const { methods, handleSubmit } = useNegotiationSimulator();

  return (
    <NegotiationProvider formMethods={methods}>
      <TooltipProvider>
        <FormProvider {...methods}>
          <div className="mx-auto w-full max-w-[1440px]">
            <Card className="border-gray-border overflow-hidden border-2 px-0 py-3 shadow-lg md:px-4">
              <CardContent className="p-0">
                <NegotiationHeader />

                <div className="bg-gray-surface border-gray-border border-b p-4 dark:bg-slate-900">
                  <div className="flex items-center gap-2 rounded-md border border-blue-200 bg-blue-50 p-2 dark:border-blue-800 dark:bg-blue-950">
                    <Info className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-blue-700 dark:text-blue-300">
                      Next Stage: STRUCTURING - 1 hour
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-6 p-6 md:flex-row">
                  {/* Sidebar */}
                  <NegotiationSidebar />

                  {/* Main Content */}
                  <div className="flex-1">
                    <NegotiationGuidance />

                    <div className="grid grid-cols-12 gap-6">
                      {/* Form Fields */}
                      <NegotiationForm formMethods={methods} />

                      {/* Results */}
                      <ValuationDisplay control={methods.control} />
                    </div>

                    <div className="mt-8 flex justify-center">
                      <Button
                        size="lg"
                        className="bg-blue-600 px-8 py-6 text-lg font-semibold hover:bg-blue-700"
                        onClick={methods.handleSubmit(handleSubmit)}
                      >
                        SUBMIT
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Modals */}
          <VideoModal />
          <TextModal />
          <FactorScoreModal />
          <WarningModal />
        </FormProvider>
      </TooltipProvider>
    </NegotiationProvider>
  );
};

export default NegotiationSimulatorView;
