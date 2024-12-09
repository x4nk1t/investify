import React from "react";

interface ButtonTypes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonType?: "primary" | "secondary";
}

export default function Button({
  children,
  buttonType = "primary",
  ...props
}: ButtonTypes) {
  return (
    <button
      className={`px-6 py-2 rounded-[35px] transition-all hover:-translate-y-1 ${
        buttonType == "secondary"
          ? "text-primary border-[1px] border-primary"
          : "bg-primary text-white"
      }`}
      {...props}
    >
      {children}
    </button>
  );
}
