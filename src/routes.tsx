import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register/Register";
import Settings from "./pages/Settings";
import MainPage from "./pages/MainPage";

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
      </Routes>
    </Router>
  );
};

export default BrowserRoutes;
