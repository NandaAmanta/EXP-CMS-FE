import React, { InputHTMLAttributes } from "react";
import "./Input.scss"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  customProp?: string;
}

interface InputWithLabelProps {
  label: string;
  inputProps: InputProps;
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({
  label,
  inputProps,
}) => {
  return (
    <div>
      <label htmlFor={inputProps.id}>{label}</label>
      <input {...inputProps} required />
    </div>
  );
};

export default InputWithLabel;
