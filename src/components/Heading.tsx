import React from "react";
interface headingInt {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}
function Heading({ children, size = "md", className }: headingInt) {
  const sizes = {
    sm: "text-2xl",
    md: "text-4xl",
    lg: "text-6xl",
  };
  return (
    <h1
      className={`${sizes[size]} font-semibold text-center text-slate-900 ${className}`}
    >
      {children}
    </h1>
  );
}

export default Heading;
