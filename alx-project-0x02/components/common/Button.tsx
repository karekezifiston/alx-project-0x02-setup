import React from "react";
import { ButtonProps } from "../../interfaces";

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  shape = "rounded-md",
  onClick,
  children,
}) => {
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`bg-blue-500 text-white ${shape} ${sizeClasses[size]} hover:bg-blue-600 transition`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
