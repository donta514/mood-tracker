import React, { forwardRef, InputHTMLAttributes } from "react";

type Variant = "default" | "hover" | "focus" | "error" | "active";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  variant?: Variant;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      error = false,
      id,
      variant = "default",
      className = "text-preset-6-reg",
      ...props
    },
    ref
  ) => {
    return (
      <>
        <input
          ref={ref}
          id={id}
          className={`${
            error ? "input-error" : "input"
          } input-${variant} ${className}`}
          {...props}
        />
        {error && (
          <div className="input-error-group">
            <img
              src="/assets/icons/info-icon.svg"
              alt="Error message info icon"
              width="12"
              height="12"
            />
            <span className="input-error-message text-preset-9">
              {" "}
              Error text
            </span>
          </div>
        )}
      </>
    );
  }
);

Input.displayName = "Input";
export default Input;
