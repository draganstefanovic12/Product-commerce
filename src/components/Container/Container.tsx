import { ReactNode } from "react";
import ScrollToTop from "../ScrollToTop";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className="flex w-full h-max justify-center bg-gray-50">
      <ScrollToTop />
      <div className={`container shadow bg-white ${className}`}>{children}</div>
    </div>
  );
};

export default Container;
