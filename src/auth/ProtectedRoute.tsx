import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-6">
        <h3>Loading...</h3>
      </div>
    ); // You can replace this with a loading spinner or a skeleton screen
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
