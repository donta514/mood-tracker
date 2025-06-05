import React, { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "default" | "hover" | "focus";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
}

export default function SecondaryButton({
  children,
  variant = "default",
  className = "text-preset-6",
  ...props
}: ButtonProps) {
  return (
    <button className={`button-secondary button-secondary-${variant} ${className}`} {...props}>
      {children}
    </button>
  );
}