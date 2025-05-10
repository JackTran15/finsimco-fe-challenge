import { EFieldStatus } from "@/pages/negotiation-simulator/providers/negotiation/negotiation.props";
import { Info } from "lucide-react";

import { Button } from "@/components/core/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/core/dialog/dialog.view";
import { Input } from "@/components/core/input";
import { Textarea } from "@/components/core/textarea/textarea.view";

import { StatusSwitch } from "../status-switch";
import { useInputField } from "./input-field.hook";
import type { InputFieldProps } from "./input-field.props";

export const InputField = (props: InputFieldProps) => {
  const {
    label,
    value,
    status,
    onStatusChange,
    prefix,
    suffix,
    disabled = false,
    tooltip,
    isTextarea = false,
    team = 1,
    fieldName,
    isNumber,
    isText,
  } = props;

  const {
    isStatusTDBDisabled,
    errorMessage,
    showTooltip,
    setShowTooltip,
    displayValue,
    handleChange,
    onKeyDown,
  } = useInputField(props);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <label className="font-medium text-slate-700 dark:text-slate-300">
            {label}
          </label>
          {tooltip && (
            <Button
              variant="ghost"
              size="sm"
              className="h-5 w-5 p-0"
              onClick={() => setShowTooltip(true)}
            >
              <Info className="h-4 w-4 cursor-help text-slate-400" />
            </Button>
          )}
        </div>

        {/* Status indicator - different for each team */}
        {team === 1 ? (
          <div className="text-sm font-medium">
            {status === EFieldStatus.TBD ? (
              <span className="text-amber-500">To Be Determined</span>
            ) : (
              <span className="text-green-500">Approved</span>
            )}
          </div>
        ) : (
          <StatusSwitch
            status={status}
            onChange={onStatusChange}
            disabled={isStatusTDBDisabled}
            fieldName={label}
          />
        )}
      </div>

      <div className="flex items-center">
        <div className="relative flex-1">
          {prefix && (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-slate-500">{prefix}</span>
            </div>
          )}

          {isTextarea ? (
            <Textarea
              id={fieldName}
              value={value}
              onChange={handleChange}
              disabled={disabled}
              className={`${prefix ? "pl-8" : ""} ${suffix ? "pr-12" : ""} h-24 resize-none`}
            />
          ) : (
            <div className="flex">
              <Input
                id={fieldName}
                type={isText ? "text" : "text"}
                value={displayValue}
                onChange={handleChange}
                disabled={disabled}
                className={`${prefix ? "pl-8" : ""} ${suffix ? "pr-12" : ""} ${errorMessage ? "border-red-500" : ""}`}
                pattern={isNumber ? "[0-9]*" : undefined}
                onKeyDown={onKeyDown}
                inputMode={isNumber ? "numeric" : undefined}
                lang="en"
              />
            </div>
          )}

          {suffix && (
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="text-slate-500">{suffix}</span>
            </div>
          )}
        </div>
      </div>

      {errorMessage && (
        <div className="text-sm text-red-500">{errorMessage}</div>
      )}

      {/* Tooltip Dialog */}
      {tooltip && (
        <Dialog open={showTooltip} onOpenChange={setShowTooltip}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>{label}</DialogTitle>
            </DialogHeader>
            <div className="text-slate-700 dark:text-slate-300">{tooltip}</div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};
