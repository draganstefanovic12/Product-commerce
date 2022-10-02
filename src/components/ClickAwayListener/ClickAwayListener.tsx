import { ReactNode, useCallback, useEffect, useRef } from "react";

type ClickAwayProps = {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  divRef: React.RefObject<HTMLDivElement>;
};

const ClickAwayListener = ({
  children,
  isOpen,
  setIsOpen,
  divRef,
}: ClickAwayProps) => {
  const handleClickFunction = useCallback(
    (e: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    },
    [divRef, setIsOpen]
  );

  useEffect(() => {
    //Closing an element on click away, this is for search field and shopping card content
    document.addEventListener("click", handleClickFunction);
  }, [divRef, handleClickFunction]);

  return <div ref={divRef}>{isOpen && children}</div>;
};

export default ClickAwayListener;
