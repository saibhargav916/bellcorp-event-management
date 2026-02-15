<<<<<<< HEAD
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
=======
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
>>>>>>> 9dbec2931f522b93ea3ea727b1b5a615b8705091
