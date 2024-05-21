import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar" id="navbar">
      <Link className="navbarLink" to="/">
        Explore AI
      </Link>

      <Link className="navbarLink rightAlign" to="/LoginOrRegister">
        Register / Login
      </Link>
    </nav>
  );
}
