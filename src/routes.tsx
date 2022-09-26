import { useUser } from "./context/UserContext";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";

const BrowserRoutes = () => {
  const { username } = useUser();

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={!username ? <Login /> : <Navigate to="/" />}
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
