import { Button } from "@/components/core/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/core/dialog/dialog.view";

import { useWarningModal } from "./warning-modal.hook";

export const WarningModalView = () => {
  const {
    showWarningModal,
    setShowWarningModal,
    warningField,
    handleWarningConfirm,
  } = useWarningModal();

  return (
    <Dialog open={showWarningModal} onOpenChange={setShowWarningModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-amber-500">Warning</DialogTitle>
          <DialogDescription>
            You are attempting to modify a field that has already been approved
            by Team 2.
          </DialogDescription>
        </DialogHeader>
        <div className="rounded-md border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950">
          <p className="text-amber-700 dark:text-amber-300">
            The field <strong>{warningField}</strong> has already been marked as
            OK by Team 2. Changing this value may require re-approval.
          </p>
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <Button variant="outline" onClick={() => setShowWarningModal(false)}>
            Cancel
          </Button>
          <Button
            variant="default"
            className="bg-amber-500 hover:bg-amber-600"
            onClick={handleWarningConfirm}
          >
            Proceed Anyway
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};