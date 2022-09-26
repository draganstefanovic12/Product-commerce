import { useUser } from "./context/UserContext";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import Register from "./pages/Register/Register";

const BrowserRoutes = () => {
  const { username } = useUser();

  return (
    <Router>
      {username && <Nav />}
      <Routes>
        <Route
          path="/login"
          element={!username ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!username ? <Register /> : <Navigate to="/" />}
        />
        <Route
          path="/"
          element={username ? <MainPage /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default BrowserRoutes;
