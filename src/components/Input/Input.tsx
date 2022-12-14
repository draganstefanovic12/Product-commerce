import React from "react";

interface InputProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  className?: string;
  placeholder?: string;
  type?: string;
  name?: string;
  value?: string | null | undefined;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input = ({
  onChange,
  className,
  placeholder,
  type,
  name,
  value,
  onKeyDown,
}: InputProps) => {
  return (
    <input
      onKeyDown={onKeyDown}
      value={value!}
      type={type}
      name={name}
      onChange={onChange}
      className={`${className} w-5/6 border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500`}
      placeholder={placeholder}
    />
  );
};

export default Input;
