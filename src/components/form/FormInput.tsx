import type { ReactNode } from "react";
import { useFormContext, type FieldErrors, type FieldValues, type Path } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { cn } from "../../lib/utils";
import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  secure?: boolean;
};

type FormInputProps<T extends FieldValues> = {
  name: Path<T>;
  label?: string;
  icon?: ReactNode;
  error?: FieldErrors<T>;
} & InputProps;

export const FormInput = <T extends FieldValues>({
  name,
  label,
  className,
  secure = false,
  icon,
  error,
  ...rest
}: FormInputProps<T>) => {
  const { register } = useFormContext<T>();

  return (
    <div className="flex flex-col gap-2">
      {label && <Label>{label}</Label>}
      <Input
        secure={secure}
        icon={icon}
        {...register(name, {
          valueAsNumber: rest.type === "number" ? true : false,
        })}
        className={cn("border", error && "border-red-500", className)}
        {...rest}
      />
      {error && (
        <div className="text-red-500 text-sm">{String(error.message)}</div>
      )}
    </div>
  );
};
