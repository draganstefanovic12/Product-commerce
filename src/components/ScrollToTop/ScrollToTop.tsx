import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  //simple component that scrolls to top on page change
  useEffect(() => {
    console.count();
    window.scrollTo(0, 0);
  }, [pathname]);

  return <></>;
};

export default ScrollToTop;
