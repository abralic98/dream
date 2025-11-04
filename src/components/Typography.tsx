import React from "react";
import { cn } from "../lib/utils";

export const H4 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h4 className={cn("text-xl font-semibold text-white", className)}>
    {children}
  </h4>
);

export const H3 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h3 className={cn("text-2xl font-semibold text-white", className)}>
    {children}
  </h3>
);

export const H2 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h2 className={cn("text-3xl font-bold text-white", className)}>{children}</h2>
);

export const H1 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h1 className={cn("text-4xl font-extrabold text-white", className)}>
    {children}
  </h1>
);

export const Text = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p className={cn("text-sm font-semibold text-white", className)}>
    {children}
  </p>
);

const Typography = { H4, H3, H2, H1, Text };

export default Typography;
