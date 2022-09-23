import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";

const BrowserRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
};

export default BrowserRoutes;
