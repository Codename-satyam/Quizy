import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import auth from "../../api/auth";

const Navbar = () => {
  const [user, setUser] = useState(auth.getCurrentUser());
  const navigate = useNavigate();

  useEffect(() => {
    const onStorage = () => setUser(auth.getCurrentUser());
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const handleLogout = () => {
    auth.logout();
    setUser(null);
    navigate('/home');
  };

  return (
    <nav className="navbar pixelify-sans-font">
      <div className="logo">
        <span>J</span>igyasa
      </div>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/play">Play</Link></li>
        {/* <li><Link to="/contact">Contact</Link></li> */}
        <li><Link to="/dashboard">Dashboard</Link></li>
        {!user ? (
          <>
            <li><Link to="/login">Login</Link></li>
          </>
        ) : (
          <>
            <li>
              <span className="nav-user">Hello, {user.name}</span>
            </li>
            <li>
              <a
                href="#"
                className="nav-logout"
              onClick={(e) => {
                e.preventDefault();
                handleLogout();
              }}
              role="button"
              aria-label="Logout"
            >
              Logout
            </a>
          </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
