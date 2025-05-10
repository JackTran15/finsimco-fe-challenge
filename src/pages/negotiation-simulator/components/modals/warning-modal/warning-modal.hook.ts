import { useNegotiation } from "@/pages/negotiation-simulator/providers/negotiation";

export const useWarningModal = () => {
  const {
    showWarningModal,
    setShowWarningModal,
    warningField,
    handleWarningConfirm,
  } = useNegotiation();

  return {
    showWarningModal,
    setShowWarningModal,
    warningField,
    handleWarningConfirm,
  };
};