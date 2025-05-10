import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

/**
 * Format number with period as thousands separator
 * Example: 1000 -> 1.000
 */
export const formatMoney = (value: number | string): string => {
  const numValue = typeof value === "string" ? parseFloat(value) : value;

  if (isNaN(numValue)) {
    return "0";
  }

  return numValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
