export const APP_ENV = {
  APP_NAME: import.meta.env.VITE_APP_NAME,
  MAX_EBITDA: import.meta.env.VITE_MAX_EBITDA,
  MIN_EBITDA: import.meta.env.VITE_MIN_EBITDA,
  MAX_MULTIPLE: import.meta.env.VITE_MAX_MULTIPLE,
  MIN_MULTIPLE: import.meta.env.VITE_MIN_MULTIPLE,
  MAX_FACTOR_SCORE: import.meta.env.VITE_MAX_FACTOR_SCORE || 5,
  MIN_FACTOR_SCORE: import.meta.env.VITE_MIN_FACTOR_SCORE || 0.5,
  FACTOR_SCORE_STEP: import.meta.env.VITE_FACTOR_SCORE_STEP || 0.5,
};
