import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/core/dialog/dialog.view";
import { FactorScoreLegend } from "@/components/factor-score-legend";

import { useFactorScoreModal } from "./factor-score-modal.hook";

export const FactorScoreModalView = () => {
  const { showFactorScoreModal, setShowFactorScoreModal } =
    useFactorScoreModal();

  return (
    <Dialog open={showFactorScoreModal} onOpenChange={setShowFactorScoreModal}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Factor Score Guide</DialogTitle>
          <DialogDescription>
            Understanding how to assign the appropriate Factor Score for company
            valuation
          </DialogDescription>
        </DialogHeader>
        <FactorScoreLegend />
      </DialogContent>
    </Dialog>
  );
};
