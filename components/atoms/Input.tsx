import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={`border rounded-lg p-2 w-full focus:outline-none focus:ring focus:ring-blue-400 ${
        className ?? ""
      }`}
    />
  );
};
