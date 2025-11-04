import { useFormContext, Controller, FieldErrors } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";
import { cn } from "../../lib/utils";

type FormSelectProps = {
  name: string;
  label?: string;
  options: { label: string; value: string }[];
  error?: FieldErrors;
  placeholder?: string;
  className?: string;
};

export const FormSelect = ({
  name,
  label,
  options,
  error,
  placeholder,
  className,
}: FormSelectProps) => {
  const { control } = useFormContext();

  return (
    <div className="flex flex-col gap-2">
      {label && <Label htmlFor={name}>{label}</Label>}

      <Controller
        control={control}
        name={name}
        render={({ field }) => {
          return (
            <Select
              value={field.value ?? ""}
              onValueChange={(value) => {
                field.onChange(value);
              }}
            >
              <SelectTrigger
                className={cn(
                  "w-[180px] border",
                  error && "border-red-500",
                  className,
                )}
                id={name}
              >
                <SelectValue placeholder={placeholder || "Select"} />
              </SelectTrigger>
              <SelectContent>
                {options.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          );
        }}
      />

      {error && (
        <div className="text-red-500 text-sm">{String(error.message)}</div>
      )}
    </div>
  );
};
