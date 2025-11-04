import React from "react";
import { StatusFilter } from "./filters/StatusFilter";

export const Filters = () => {
  return (
    <div className="h-20 bg-neutral-700 z-10 relative">
      <StatusFilter />
    </div>
  );
};
