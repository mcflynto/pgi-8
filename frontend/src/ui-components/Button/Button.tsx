import React from "react";
import "./Button.css";

export type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent) => void;
};

const Button = ({ children, disabled, onClick }: ButtonProps) => {
  return (
    <button
      className="btn"
      onClick={(event) => !disabled && onClick && onClick(event)}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
