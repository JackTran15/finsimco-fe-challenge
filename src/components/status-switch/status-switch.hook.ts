import { useState } from "react";
import { EFieldStatus } from "@/pages/negotiation-simulator/providers/negotiation/negotiation.props";

import type { StatusSwitchProps } from "./status-switch.props";

export const useStatusSwitch = (props: StatusSwitchProps) => {
  const { status, onChange } = props;

  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const handleChange = (checked: boolean) => {
    // If changing from OK to TBD, show confirmation dialog
    if (status === EFieldStatus.OK && !checked) {
      setShowConfirmDialog(true);
    } else {
      // Otherwise, just change the status
      console.log("changing status", {
        a: status === EFieldStatus.OK,
        b: checked,
      });
      onChange(checked ? EFieldStatus.OK : EFieldStatus.TBD);
    }
  };

  const confirmChange = () => {
    onChange(EFieldStatus.TBD);
    setShowConfirmDialog(false);
  };

  return {
    showConfirmDialog,
    setShowConfirmDialog,
    handleChange,
    confirmChange,
  };
};
