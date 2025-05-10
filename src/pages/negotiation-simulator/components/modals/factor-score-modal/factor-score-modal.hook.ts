import { useNegotiation } from "@/pages/negotiation-simulator/providers/negotiation";

export const useFactorScoreModal = () => {
  const { showFactorScoreModal, setShowFactorScoreModal } = useNegotiation();

  return {
    showFactorScoreModal,
    setShowFactorScoreModal,
  };
};