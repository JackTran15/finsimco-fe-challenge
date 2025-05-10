import { type Team } from "@/pages/negotiation-simulator/providers/negotiation";

export interface TeamSwitcherProps {
  team: Team;
  onChange: (team: Team) => void;
}
