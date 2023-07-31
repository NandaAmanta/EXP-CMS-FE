import React, { ButtonHTMLAttributes } from "react";
import "./Button.scss"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outline?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  outline,
  className,
  ...buttonProps
}) => {
  const buttonClassName = `button btn${
    outline
      ? " btn-outline btn-xs sm:btn-sm md:btn-md"
      : " btn-xs sm:btn-sm md:btn-md"
  }${className ? " " + className : ""}`;

  return (
    <button className={buttonClassName} {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
