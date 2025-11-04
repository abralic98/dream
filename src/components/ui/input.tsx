import * as React from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { cn } from "../../lib/utils";

export type InputProps = {
  secure?: boolean;
  icon?: React.ReactNode;
  onClickIcon?: () => void;
  disabled?: boolean;
};

function Input({
  className,
  secure,
  type,
  icon,
  disabled,
  onClickIcon,
  ...props
}: React.ComponentProps<"input"> & InputProps) {
  const [secured, setSecured] = React.useState(secure ?? false);

  return (
    <div className="relative w-full">
      <input
        disabled={disabled}
        type={secured ? "password" : (type ?? "text")}
        className={cn("w-full h-14 bg-gray-700 text-white px-4 pr-14 rounded-lg", className)}
        {...props}
      />

      {icon && (
        <div
          onClick={onClickIcon && onClickIcon}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-muted-foreground"
        >
          {icon}
        </div>
      )}

      {secure && (
        <div
          onClick={() => setSecured(!secured)}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer text-muted-foreground"
        >
          {secured ? (
            <EyeIcon className="w-6 h-6 text-white" />
          ) : (
            <EyeOffIcon className="w-6 h-6 text-white" />
          )}
        </div>
      )}
    </div>
  );
}

export { Input };
