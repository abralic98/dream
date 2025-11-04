import { useFormContext, Controller, FieldErrors } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Label } from "../ui/label";
import { cn } from "../../lib/utils";

type FormDatePickerProps = {
  name: string;
  label?: string;
  error?: FieldErrors;
  placeholder?: string;
  className?: string;
};

export const FormDatePicker = ({
  name,
  label,
  error,
  placeholder,
  className,
}: FormDatePickerProps) => {
  const { control } = useFormContext();

  return (
    <div className="flex flex-col gap-2">
      {label && <Label htmlFor={name}>{label}</Label>}

      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <DatePicker
            id={name}
            selected={field.value}
            onChange={(date: Date | null) => field.onChange(date)}
            placeholderText={placeholder || "Select a date"}
            className={cn(
              "px-2 py-1 rounded border bg-white h-10",
              error && "border-red-500",
              className,
            )}
          />
        )}
      />

      {error && (
        <div className="text-red-500 text-sm">{String(error.message)}</div>
      )}
    </div>
  );
};
