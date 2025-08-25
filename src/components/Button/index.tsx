import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  variant?: "primary" | "delete" | "header";
  className?: string;
  type?: "button" | "submit";
}

export const Button = ({
  onClick,
  disabled = false,
  variant = "primary",
  children,
  className,
  type = "button",
}: ButtonProps) => {
  const variantClasses = {
    primary:
      "bg-[#393E46] rounded-lg text-white px-3 py-1 font-medium hover:opacity-90 font-semibold",
    delete:
      "rounded-lg bg-red-600 text-white px-3 py-1 font-medium hover:opacity-90 font-semibold",
    header: "font-semibold mr-3 bg-gray-300 hover:bg-gray-400 rounded-lg px-4",
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center cursor-pointer text-base ${variantClasses[variant]} ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};
