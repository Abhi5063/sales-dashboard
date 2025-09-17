import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = (props) => {
  return (
    <input
      {...props}
      className="border rounded-lg p-2 w-full focus:outline-none focus:ring focus:ring-blue-400"
    />
  );
};
