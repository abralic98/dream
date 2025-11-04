import { StatusFilter } from "./filters/StatusFilter";

import "react-datepicker/dist/react-datepicker.css";
import { FormDatePicker } from "../../../components/form/FormDatePicker";
import { Button } from "../../../components/ui/button";
import { useFormContext } from "react-hook-form";

export const Filters = () => {
  const form = useFormContext();
  return (
    <div className="h-20 bg-neutral-700 z-10 relative flex items-center gap-4 p-4">
      <StatusFilter />
      <div className="flex flex-row gap-2 items-center">
        <FormDatePicker
          name="after"
          label="After"
          placeholder="Select a start date"
        />

        <FormDatePicker
          name="before"
          label="Before"
          placeholder="Select an end date"
        />
      </div>
      <Button type="button" onClick={() => form.reset()}>
        Clear filter
      </Button>
    </div>
  );
};
