import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import Settings from "./pages/Settings";
import MainPage from "./pages/MainPage";
import Register from "./pages/Register";
import Categories from "./pages/Categories";
import SellProduct from "./pages/SellProduct";
import ShoppingCartContent from "./features/shopping cart/components/ShoppingCartContent";

const BrowserRoutes = () => {
  return (
    <Router>
      <Nav />
      <ShoppingCartContent />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/category/:category/:offset" element={<Categories />} />
        <Route path="/sell" element={<SellProduct />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
};

export default BrowserRoutes;
