import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Messages from "./pages/Messages";
import MainPage from "./pages/MainPage";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import Categories from "./pages/Categories";
import SellProduct from "./pages/SellProduct";
import ProductPage from "./pages/Product";
import ProtectedRoutes from "./components/ProtectedRoutes";
import ShoppingCartContent from "./features/shopping cart/components/ShoppingCartContent";

const routes = [
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/profile/:username", element: <Profile /> },
  { path: "/category/:category/:offset", element: <Categories /> },
  { path: "/product/:id", element: <ProductPage /> },
  { path: "/search/:query", element: <Search /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/", element: <MainPage /> },
];

const protectedRoutes = [
  { path: "/settings", element: <Settings /> },
  { path: "/sell", element: <SellProduct /> },
  { path: "/messages", element: <Messages /> },
  { path: "/messages/:receipent", element: <Messages /> },
];

const BrowserRoutes = () => {
  return (
    <Router>
      <Nav />
      <ShoppingCartContent />
      <Routes>
        {routes.map((route, i) => (
          <Route key={i} path={route.path} element={route.element} />
        ))}
        {protectedRoutes.map((route, i) => (
          <Route
            key={i}
            path={route.path}
            element={<ProtectedRoutes>{route.element}</ProtectedRoutes>}
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default BrowserRoutes;
