import React from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx"; // Optional; you can replace with template literals

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline";
};

const sizeMap = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({
  href,
  children,
  className = "",
  size = "md",
  variant = "solid",
}) => {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors duration-300 group";

  const variants = {
    solid: "bg-white text-black hover:bg-gray-800",
    outline: "border border-black text-black hover:bg-gray-100",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(base, sizeMap[size], variants[variant], className)}
    >
      {children}
      
    </a>
  );
};

export default Button;
