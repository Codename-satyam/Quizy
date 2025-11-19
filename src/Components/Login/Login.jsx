import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import auth from "../../api/auth";
import "./auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await auth.login({ email, password });
      // After successful login, send user to the homepage instead of opening the quiz
      navigate('/home');
    } catch (err) {
      setError(err.message || 'Login failed');
    }
  };

  return (
    <div className="auth-root">
      <form className="auth-box" onSubmit={submit}>
        <h2>Welcome back</h2>
        {error && <div className="auth-error">{error}</div>}
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
        <p style={{marginTop:12}}>No account? <Link to="/register">Register</Link></p>
      </form>
    </div>
  );
}

export default Login;
