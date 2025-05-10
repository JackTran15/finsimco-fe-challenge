import { useState } from "react";
import { APP_CONFIG } from "@/app/app.config";

export const useNegotiationGuidance = () => {
  const [guidanceOpen, setGuidanceOpen] = useState(() => {
    const stored = localStorage.getItem(
      APP_CONFIG.LOCAL_STORAGE_KEYS.NEGOTIATION_GUIDANCE
    );
    return stored !== "closed";
  });

  const handleGuidanceClose = () => {
    setGuidanceOpen(false);
    localStorage.setItem(
      APP_CONFIG.LOCAL_STORAGE_KEYS.NEGOTIATION_GUIDANCE,
      "closed"
    );
  };

  return {
    guidanceOpen,
    setGuidanceOpen,
    handleGuidanceClose,
  };
};
