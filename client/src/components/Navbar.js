
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import '../index.css'

function Navbar() {
  const { userToken, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
       <div className="container nav-content">
      <Link to="/">Events</Link>

      {userToken ? (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
      </div>
    </nav>
  );
}

// const navStyle = {
//   display: "flex",
//   gap: "15px",
//   padding: "10px",
//   background: "#eee"
// };

export default Navbar;

