interface InputProps {
  onChange?: () => void;
  className?: string;
  placeholder?: string;
  type?: string;
  name?: string;
}

const Input = ({
  onChange,
  className,
  placeholder,
  type,
  name,
}: InputProps) => {
  return (
    <input
      type={type}
      name={name}
      onChange={onChange}
      className={`${className} w-5/6 border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500`}
      placeholder={placeholder}
    />
  );
};

export default Input;
