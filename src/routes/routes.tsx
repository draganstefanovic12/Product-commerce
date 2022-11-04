import { HashRouter as Router } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AnimatedRoutes from "./AnimatedRoutes";
import ShoppingCartContent from "../features/shopping cart/components/ShoppingCartContent";

const BrowserRoutes = () => {
  return (
    <Router>
      <Nav />
      <ShoppingCartContent />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
};

export default BrowserRoutes;
