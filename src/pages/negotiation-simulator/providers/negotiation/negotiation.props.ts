export const ETeam = {
  TEAM_1: 1,
  TEAM_2: 2,
} as const;

export const EFieldStatus = {
  TBD: "TBD",
  OK: "OK",
} as const;

export type Team = (typeof ETeam)[keyof typeof ETeam];
export type FieldStatus = (typeof EFieldStatus)[keyof typeof EFieldStatus];

export interface NegotiationContextProps {
  team: Team;
  setTeam: (team: Team) => void;
  showVideoModal: boolean;
  setShowVideoModal: (show: boolean) => void;
  showTextModal: boolean;
  setShowTextModal: (show: boolean) => void;
  showWarningModal: boolean;
  setShowWarningModal: (show: boolean) => void;
  showFactorScoreModal: boolean;
  setShowFactorScoreModal: (show: boolean) => void;
  warningField: string;
  setWarningField: (field: string) => void;
  guidanceOpen: boolean;
  setGuidanceOpen: (open: boolean) => void;
  firstTimeVisit: boolean;
  editingField: string;
  setEditingField: (field: string) => void;
  fieldStatuses: Record<string, FieldStatus>;
  setFieldStatus: (field: string, status: FieldStatus) => void;
  calculateValuation: (
    ebitda: number,
    multiple: number,
    factorScore: number
  ) => number;
  handleStatusToggle: (field: string, status: FieldStatus) => void;
  handleWarningConfirm: () => void;
  openWarningModal: (field: string, value: number) => void;
}
