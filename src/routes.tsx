import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import MainPage from "./pages/MainPage";
import Register from "./pages/Register";
import Categories from "./pages/Categories";

const BrowserRoutes = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/categories/:category" element={<Categories />}></Route>
      </Routes>
    </Router>
  );
};

export default BrowserRoutes;
