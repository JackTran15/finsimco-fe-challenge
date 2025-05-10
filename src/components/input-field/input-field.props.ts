import type React from "react";
import type { ANY } from "@/global.type";

export interface InputFieldProps {
  label: string;
  value: ANY;
  onChange: (value: ANY) => void;
  status: string;
  onStatusChange: (status: string) => void;
  prefix?: string;
  suffix?: string;
  disabled?: boolean;
  statusDisabled?: boolean;
  tooltip?: React.ReactNode;
  isTextarea?: boolean;
  isText?: boolean;
  setEditingField: (field: string) => void;
  fieldName: string;
  team?: 1 | 2;
  min?: number;
  max?: number;
  isIncrementOrDecrement?: boolean;
  isNumber?: boolean;
}
