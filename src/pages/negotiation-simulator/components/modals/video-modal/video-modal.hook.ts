import { useNegotiation } from "@/pages/negotiation-simulator/providers/negotiation";

export const useVideoModal = () => {
  const { showVideoModal, setShowVideoModal } = useNegotiation();

  return {
    showVideoModal,
    setShowVideoModal,
  };
};