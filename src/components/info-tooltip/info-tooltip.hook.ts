import { useState } from "react";

export const useInfoTooltip = () => {
  const [open, setOpen] = useState(false);

  return {
    open,
    setOpen,
  };
};
