import { motion } from "framer-motion";
import { ReactNode } from "react";
import ScrollToTop from "../ScrollToTop";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
      className="flex w-full h-max justify-center bg-gray-50"
    >
      <ScrollToTop />
      <div className={`container shadow bg-white ${className}`}>{children}</div>
    </motion.div>
  );
};

export default Container;
