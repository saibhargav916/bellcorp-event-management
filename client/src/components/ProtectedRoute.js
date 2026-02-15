
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  const { userToken } = useContext(AuthContext);

  
  if (!userToken) {
    return <Navigate to="/login" />;
  }

  
  return children;
}

export default ProtectedRoute;

