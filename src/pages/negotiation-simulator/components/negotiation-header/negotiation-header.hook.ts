import { useNegotiation } from "@/pages/negotiation-simulator/providers/negotiation";

export const useNegotiationHeader = () => {
  const { team, setTeam } = useNegotiation();

  return {
    team,
    setTeam,
  };
};