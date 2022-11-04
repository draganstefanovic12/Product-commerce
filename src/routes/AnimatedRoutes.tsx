import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "../pages/Login";
import Search from "../pages/Search";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import MainPage from "../pages/MainPage";
import Messages from "../pages/Messages";
import Register from "../pages/Register";
import Checkout from "../pages/Checkout";
import Settings from "../pages/Settings";
import Categories from "../pages/Categories";
import ProductPage from "../pages/Product";
import SellProduct from "../pages/SellProduct";
import ProtectedRoutes from "../components/ProtectedRoutes";

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

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
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
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
