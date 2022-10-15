import { Navigate, useLocation } from "react-router-dom";

type RouteProps = {
  children: JSX.Element;
};

const ProtectedRoutes = ({ children }: RouteProps) => {
  const username = localStorage.getItem("commUser");
  const location = useLocation();

  if (!username) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoutes;
