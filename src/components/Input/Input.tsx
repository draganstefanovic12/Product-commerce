interface InputProps {
  onChange?: () => void;
  className?: string;
  placeholder?: string;
}

const Input = ({ onChange, className, placeholder }: InputProps) => {
  return (
    <input
      onChange={onChange}
      className={className}
      placeholder={placeholder}
    />
  );
};

export default Input;
