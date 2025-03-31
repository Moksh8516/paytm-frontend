import React, { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  className = "",
  disabled = false,
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 ",
    dark: "bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 ",
  };
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-md",
    lg: "px-8 py-4 text-lg",
  };
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${variants[variant]} ${sizes[size]} ${className} rounded-lg shadow-sm focus:outline-none focus:ring-2 duration-200 delay-75`}
      {...props}
    >
      {children}
    </button>
  );
}
