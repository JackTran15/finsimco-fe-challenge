import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/core/dialog/dialog.view";

import { useTextModal } from "./text-modal.hook";

export const TextModalView = () => {
  const { showTextModal, setShowTextModal } = useTextModal();

  return (
    <Dialog open={showTextModal} onOpenChange={setShowTextModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Detailed Instructions</DialogTitle>
        </DialogHeader>
        <div className="max-h-[60vh] overflow-y-auto">
          <p className="text-gray-text leading-relaxed dark:text-slate-300">
            This simulation represents a negotiation between two teams over the
            valuation and terms of a business deal.
            <br />
            <br />
            <strong>Team 1 Responsibilities:</strong>
            <br />- Input values for all fields (EBITDA, Multiple, etc.)
            <br />- Adjust the Factor Score using the slider
            <br />- Cannot change the TBD/OK status of any field
            <br />
            <br />
            <strong>Team 2 Responsibilities:</strong>
            <br />- Review the values entered by Team 1
            <br />- Toggle the status of each field between TBD and OK
            <br />- Cannot modify any input values
            <br />
            <br />
            The valuation is calculated using the formula: EBITDA × Multiple ×
            Factor Score.
            <br />
            <br />
            The pie chart visualizes how each component contributes to the final
            valuation.
            <br />
            <br />
            Once all fields are marked as OK by Team 2, the negotiation can be
            submitted.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};