export interface StatusSwitchProps {
  status: string;
  onChange: (status: string) => void;
  disabled?: boolean;
  fieldName?: string;
}
