
import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import '../index.css'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      { email, password }
    );

    login(res.data.token);
    navigate("/");

  } catch (error) {
    console.log("Login error:", error.response?.data);
    alert(error.response?.data?.message || "Login failed");
  }
};


  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;

