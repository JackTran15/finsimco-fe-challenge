import { useNegotiation } from "@/pages/negotiation-simulator/providers/negotiation";

export const useTextModal = () => {
  const { showTextModal, setShowTextModal } = useNegotiation();

  return {
    showTextModal,
    setShowTextModal,
  };
};