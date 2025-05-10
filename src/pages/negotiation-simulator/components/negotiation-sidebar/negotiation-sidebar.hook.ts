import { useNegotiation } from "@/pages/negotiation-simulator/providers/negotiation";

export const useNegotiationSidebar = () => {
  const { setShowVideoModal, setShowTextModal } = useNegotiation();

  return {
    setShowVideoModal,
    setShowTextModal,
  };
};