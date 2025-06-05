import React, { forwardRef, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "default" | "hover" | "focus" | "disabled";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, variant = "default", className = "text-preset-5", ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={`button button-${variant} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
