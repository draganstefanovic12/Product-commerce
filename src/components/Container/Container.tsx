import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className="flex w-full h-max justify-center bg-gray-50">
      <div className={`container shadow h-screen bg-white ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default Container;
