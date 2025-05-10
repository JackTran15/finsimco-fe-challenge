import { useMemo, useState } from "react";
import { formatMoney } from "@/lib/utils";

import type { InputFieldProps } from "./input-field.props";

export const useInputField = (props: InputFieldProps) => {
  const {
    value,
    isText,
    isTextarea,
    onChange,
    min,
    max,
    isNumber,
    statusDisabled,
  } = props;

  const [showTooltip, setShowTooltip] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const isStatusTDBDisabled = useMemo(() => {
    return statusDisabled || errorMessage.length > 0;
  }, [statusDisabled, errorMessage]);

  const displayValue = useMemo(() => {
    if (isNumber) {
      return formatMoney(value);
    }

    if (isText || isTextarea) {
      return value;
    }

    return value;
  }, [value, isText, isTextarea, isNumber]);

  const unformatNumber = (formattedNum: string): string => {
    return formattedNum.replace(/\./g, "");
  };

  const validateValue = (val: number) => {
    if (min !== undefined && val < min) {
      setErrorMessage(`Value should be at least ${formatMoney(min)}`);
    } else if (max !== undefined && val > max) {
      setErrorMessage(`Value should not exceed ${formatMoney(max)}`);
    } else {
      setErrorMessage("");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const inputValue = e.target.value.trim();
    if (isNumber) {
      // For numeric inputs
      if (inputValue === "") {
        onChange(0);
        setErrorMessage("");
      } else {
        const unformattedValue = unformatNumber(inputValue);

        const isNumber = !isNaN(Number(unformattedValue));

        if (!isNumber) {
          onChange(value);
          return;
        }

        if (/^\d*$/.test(unformattedValue)) {
          const numValue = parseInt(unformattedValue, 10);

          validateValue(numValue);

          onChange(numValue);
        }
      }
    } else {
      onChange(inputValue);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isNumber) {
      if (!/\d/.test(e.key) && e.key !== "Backspace") {
        e.preventDefault();
      }
    }
  };

  return {
    isStatusTDBDisabled,
    errorMessage,
    showTooltip,
    setShowTooltip,
    displayValue,
    handleChange,
    onKeyDown,
  };
};
