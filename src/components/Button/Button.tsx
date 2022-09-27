interface ButtonProps {
  children: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button = ({ children, onClick, className, type }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`bg-blue-500 hover:bg-blue-700 w-1/4 text-white font-bold py-2 px-4 border border-blue-700 rounded ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
