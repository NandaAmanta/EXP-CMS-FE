import React, { ButtonHTMLAttributes } from "react";
import "./ButtonStep.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outline?: boolean;
  className?: string;
  sx?: { [key: string]: any };
}

const ButtonStep: React.FC<ButtonProps> = ({
  children,
  outline,
  className,
  sx,
  ...buttonProps
}) => {
  const buttonClassName = `btn${
    outline
      ? " outline btn-outline btn-xs sm:btn-sm md:btn-md"
      : " btn-step btn-xs sm:btn-sm md:btn-md"
  }${className ? " " + className : ""}`;

  return (
    <button className={buttonClassName} {...buttonProps}>
      {children}
    </button>
  );
};

export default ButtonStep;
