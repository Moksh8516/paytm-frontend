import React from "react";
interface headingInt {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}
function Subheading({ children, size = "md", className }: headingInt) {
  const sizes = {
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
  };
  return (
    <h1 className={`${sizes[size]} text-slate-900 ${className}`}>{children}</h1>
  );
}

export default Subheading;
