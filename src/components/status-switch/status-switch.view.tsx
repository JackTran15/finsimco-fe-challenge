import { EFieldStatus } from "@/pages/negotiation-simulator/providers/negotiation/negotiation.props";

import { Button } from "@/components/core/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/core/dialog/dialog.view";
import { Switch } from "@/components/core/switch/switch.view";

import { useStatusSwitch } from "./status-switch.hook";
import type { StatusSwitchProps } from "./status-switch.props";

export const StatusSwitch = (props: StatusSwitchProps) => {
  const { status, disabled = false, fieldName = "this term" } = props;
  console.log("props", props);
  const {
    showConfirmDialog,
    setShowConfirmDialog,
    handleChange,
    confirmChange,
  } = useStatusSwitch(props);

  return (
    <>
      <div className="flex items-center gap-2">
        <span
          className={`text-sm font-medium ${status === EFieldStatus.TBD ? "text-amber-500" : "text-gray-400"}`}
        >
          TBD
        </span>
        <Switch
          checked={status === EFieldStatus.OK}
          onCheckedChange={handleChange}
          disabled={disabled}
          className={`${status === EFieldStatus.OK ? "bg-green-500" : "bg-amber-500"}`}
        />
        <span
          className={`text-sm font-medium ${status === EFieldStatus.OK ? "text-green-500" : "text-gray-400"}`}
        >
          OK
        </span>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-amber-500">
              Confirm Status Change
            </DialogTitle>
            <DialogDescription>
              Are you sure you want to change {fieldName} back to "TBD"?
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-gray-700 dark:text-gray-300">
              Doing so will require Team 1 to update the value again before it
              can be approved.
            </p>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowConfirmDialog(false)}
            >
              Cancel
            </Button>
            <Button
              variant="default"
              className="bg-amber-500 hover:bg-amber-600"
              onClick={confirmChange}
            >
              Change to TBD
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
