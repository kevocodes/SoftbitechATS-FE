import { Label } from "./ui/label";
import { Input as ShadcnInput } from "./ui/input";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  placeholder?: string;
}

export const FormInput = function Input({
  id,
  label,
  placeholder,
  ...inputProps
}: FormInputProps ) {
  return (
    <div className="flex flex-col space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <ShadcnInput id={id} placeholder={placeholder} {...inputProps} />
    </div>
  );
};
