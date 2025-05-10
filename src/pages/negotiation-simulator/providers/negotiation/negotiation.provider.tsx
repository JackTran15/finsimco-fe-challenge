import { useEffect, useRef, useState, type ReactNode } from "react";
import type { UseFormReturn } from "react-hook-form";
import { APP_ENV } from "@/app/app.env";

import type { NegotiationFormValues } from "../../schema/negotiation-form-schema";
import { NegotiationContext } from "./negotiation.ctx";
import {
  EFieldStatus,
  ETeam,
  type FieldStatus,
  type Team,
} from "./negotiation.props";

export const NegotiationProvider = ({
  children,
  formMethods,
}: {
  children: ReactNode;
  formMethods: UseFormReturn<NegotiationFormValues>;
}) => {
  const [team, setTeam] = useState<Team>(ETeam.TEAM_1);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showTextModal, setShowTextModal] = useState(false);
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [showFactorScoreModal, setShowFactorScoreModal] = useState(false);
  const [warningField, setWarningField] = useState("");
  const [guidanceOpen, setGuidanceOpen] = useState(true);
  const [firstTimeVisit, setFirstTimeVisit] = useState(true);
  const [editingField, setEditingField] = useState("");

  const refWarningValue = useRef<number>(0);
  const [fieldStatuses, setFieldStatuses] = useState<
    Record<string, FieldStatus>
  >({
    ebitda: EFieldStatus.TBD,
    multiple: EFieldStatus.TBD,
    factorScore: EFieldStatus.TBD,
    companyName: EFieldStatus.TBD,
    description: EFieldStatus.TBD,
  });

  useEffect(() => {
    const visited = localStorage.getItem("visited");
    if (visited) {
      setFirstTimeVisit(false);
      setGuidanceOpen(false);
    } else {
      localStorage.setItem("visited", "true");
    }
  }, []);

  const calculateValuation = (
    ebitda: number,
    multiple: number,
    factorScore: number
  ): number => {
    const clampedEbitda = Math.min(
      Math.max(ebitda, APP_ENV.MIN_EBITDA),
      APP_ENV.MAX_EBITDA
    );
    const clampedMultiple = Math.min(
      Math.max(multiple, APP_ENV.MIN_MULTIPLE),
      APP_ENV.MAX_MULTIPLE
    );
    const clampedFactorScore = Math.min(
      Math.max(factorScore, APP_ENV.MIN_FACTOR_SCORE),
      APP_ENV.MAX_FACTOR_SCORE
    );

    return clampedEbitda * clampedMultiple * clampedFactorScore;
  };

  const handleStatusToggle = (field: string, status: FieldStatus) => {
    if (team === ETeam.TEAM_2) {
      setFieldStatuses((prev) => ({
        ...prev,
        [field]: status,
      }));
    }
  };

  const handleWarningConfirm = () => {
    setShowWarningModal(false);

    if (warningField) {
      setFieldStatuses((prev) => ({
        ...prev,
        [warningField]: EFieldStatus.TBD,
      }));

      formMethods.setValue(
        warningField as keyof NegotiationFormValues,
        refWarningValue.current,
        {
          shouldValidate: true,
        }
      );

      refWarningValue.current = 0;
    }

    if (editingField) {
      const element = document.getElementById(editingField);
      if (element) {
        element.focus();
      }
    }
  };

  const openWarningModal = (field: string, value: number) => {
    setWarningField(field);
    setShowWarningModal(true);
    refWarningValue.current = value;
  };

  const value = {
    team,
    setTeam,
    showVideoModal,
    setShowVideoModal,
    showTextModal,
    setShowTextModal,
    showWarningModal,
    setShowWarningModal,
    showFactorScoreModal,
    setShowFactorScoreModal,
    warningField,
    setWarningField,
    guidanceOpen,
    setGuidanceOpen,
    firstTimeVisit,
    editingField,
    setEditingField,
    fieldStatuses,
    setFieldStatus: handleStatusToggle,
    calculateValuation,
    handleStatusToggle,
    handleWarningConfirm,
    openWarningModal,
  };

  return (
    <NegotiationContext.Provider value={value}>
      {children}
    </NegotiationContext.Provider>
  );
};
