import { APP_ENV } from "@/app/app.env";
import {
  EFieldStatus,
  ETeam,
  type FieldStatus,
} from "@/pages/negotiation-simulator/providers/negotiation";
import { Info } from "lucide-react";

import { Button } from "@/components/core/button";
import { InputField } from "@/components/input-field";
import { Slider } from "@/components/slider";
import { StatusSwitch } from "@/components/status-switch";

import { useNegotiationForm } from "./negotiation-form.hook";
import type { NegotiationFormProps } from "./negotiation-form.props";

export const NegotiationFormView = (props: NegotiationFormProps) => {
  const {
    ebitda,
    multiple,
    factorScore,
    team,
    fieldStatuses,
    setFieldStatus,
    handleInputChange,
    watch,
    setEditingField,
    setShowFactorScoreModal,
  } = useNegotiationForm(props);

  return (
    <div className="col-span-12 space-y-6 md:col-span-6">
      <InputField
        label="EBITDA"
        value={ebitda}
        onChange={(value) => handleInputChange("ebitda", value)}
        status={fieldStatuses.ebitda}
        onStatusChange={(status) => {
          console.log("status", status);
          setFieldStatus("ebitda", status as FieldStatus);
        }}
        prefix="$"
        suffix="million"
        disabled={team === ETeam.TEAM_2}
        statusDisabled={team === ETeam.TEAM_1}
        min={APP_ENV.MIN_EBITDA}
        max={APP_ENV.MAX_EBITDA}
        tooltip={
          <div>
            <p>
              Earnings Before Interest, Taxes, Depreciation, and Amortization -
              a measure of a company's overall financial performance.
            </p>
            <p className="mt-2">
              This is a key component in the valuation formula:{" "}
              <strong>Valuation = EBITDA × Multiple × Factor Score</strong>
            </p>
          </div>
        }
        setEditingField={setEditingField}
        fieldName="ebitda"
        team={team}
        isNumber
      />

      <InputField
        label="Multiple"
        value={multiple}
        onChange={(value) => handleInputChange("multiple", value)}
        status={fieldStatuses.multiple}
        onStatusChange={(status) => {
          setFieldStatus("multiple", status as FieldStatus);
        }}
        suffix="x"
        disabled={team === ETeam.TEAM_2}
        statusDisabled={team === ETeam.TEAM_1}
        min={APP_ENV.MIN_MULTIPLE}
        max={APP_ENV.MAX_MULTIPLE}
        tooltip={
          <div>
            <p>
              A valuation metric that shows how much investors are willing to
              pay per dollar of earnings.
            </p>
            <p className="mt-2">
              This is a key component in the valuation formula:{" "}
              <strong>Valuation = EBITDA × Multiple × Factor Score</strong>
            </p>
            <p className="mt-2">
              Industry averages typically range from 4x to 15x depending on
              sector, growth rate, and risk profile.
            </p>
          </div>
        }
        setEditingField={setEditingField}
        fieldName="multiple"
        team={team}
        isNumber
      />

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <label className="text-gray-text font-medium dark:text-slate-300">
              Factor Score
            </label>
            <Button
              variant="ghost"
              size="sm"
              className="h-5 w-5 p-0"
              onClick={() => setShowFactorScoreModal(true)}
            >
              <Info className="text-muted-text h-4 w-4 cursor-help" />
            </Button>
          </div>

          {/* Status indicator - different for each team */}
          {team === ETeam.TEAM_1 ? (
            <div className="text-sm font-medium">
              {fieldStatuses.factorScore === EFieldStatus.TBD ? (
                <span className="text-amber-500">To Be Determined</span>
              ) : (
                <span className="text-green-500">Approved</span>
              )}
            </div>
          ) : (
            <StatusSwitch
              status={fieldStatuses.factorScore}
              onChange={(status) =>
                setFieldStatus("factorScore", status as FieldStatus)
              }
              disabled={false}
              fieldName="Factor Score"
            />
          )}
        </div>
        <Slider
          value={[factorScore]}
          onValueChange={(values) => {
            if (Array.isArray(values) && values.length > 0) {
              handleInputChange("factorScore", values[0]);
            }
          }}
          min={parseFloat(APP_ENV.MIN_FACTOR_SCORE)}
          max={parseFloat(APP_ENV.MAX_FACTOR_SCORE)}
          step={parseFloat(APP_ENV.FACTOR_SCORE_STEP)}
          disabled={team === ETeam.TEAM_2}
        />
      </div>

      <InputField
        label="Company Name"
        value={watch("companyName")}
        onChange={(value) => handleInputChange("companyName", value)}
        status={fieldStatuses.companyName}
        onStatusChange={(status) =>
          setFieldStatus("companyName", status as FieldStatus)
        }
        disabled={team === ETeam.TEAM_2}
        statusDisabled={team === ETeam.TEAM_1}
        tooltip="The legal name of the company being valued"
        setEditingField={setEditingField}
        fieldName="companyName"
        isText
        team={team}
      />

      <InputField
        label="Description"
        value={watch("description")}
        onChange={(value) => handleInputChange("description", value)}
        status={fieldStatuses.description}
        onStatusChange={(status) =>
          setFieldStatus("description", status as FieldStatus)
        }
        disabled={team === ETeam.TEAM_2}
        statusDisabled={team === ETeam.TEAM_1}
        tooltip="A brief description of the company's business model and operations"
        setEditingField={setEditingField}
        fieldName="description"
        isTextarea
        team={team}
      />
    </div>
  );
};
